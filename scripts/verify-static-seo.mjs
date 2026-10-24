#!/usr/bin/env node
/**
 * Post-build SEO guard. Run as `postbuild`. Adapted from the ship-fleet
 * `@shipfleet/web-shared` package, where both failures below shipped once.
 *
 * Two failure modes, both silent — the build stays green and only Search
 * Console notices, weeks later:
 *
 *   1. A page renders dynamically. Next streams metadata into `<body>` on
 *      dynamic renders, where Googlebot ignores `rel=canonical` and the meta
 *      description. Anything that makes a layout dynamic (`await headers()`,
 *      `cookies()`, `force-dynamic`) takes the whole subtree with it.
 *   2. `siteUrl` falls back to `http://localhost:3000`, baking localhost
 *      canonicals/hreflang/sitemap entries into every prerendered page and
 *      making the middleware 301 live traffic to localhost.
 *
 * So this asserts, against real build output: every app page is prerendered, and
 * every prerendered page carries a canonical + description inside `<head>` on a
 * non-local origin.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const args = process.argv.slice(2)

/**
 * `--allow-dynamic=/[locale]/unsubscribe,/foo` exempts routes that are dynamic
 * on purpose and carry no SEO weight (token-gated pages, authed views). Keep the
 * list short and justify each entry at the call site — every exemption is a page
 * whose metadata Googlebot will not read.
 */
const allowedDynamic = new Set(
  args
    .filter((arg) => arg.startsWith('--allow-dynamic='))
    .flatMap((arg) => arg.slice('--allow-dynamic='.length).split(','))
    .map((route) => route.trim())
    .filter(Boolean),
)

const distDir = resolve(args.find((arg) => !arg.startsWith('--')) ?? '.next')
const errors = []
const warnings = []

function readJson(name) {
  try {
    return JSON.parse(readFileSync(join(distDir, name), 'utf8'))
  } catch (cause) {
    throw new Error(
      `[verify-static-seo] cannot read ${name} in ${distDir}. Run this after \`next build\`.`,
      { cause },
    )
  }
}

// ---------------------------------------------------------------- 1. prerender

const appRoutes = readJson('app-path-routes-manifest.json')
const prerender = readJson('prerender-manifest.json')

const prerenderedSrcRoutes = new Set([
  ...Object.keys(prerender.dynamicRoutes ?? {}),
  ...Object.values(prerender.routes ?? {}).flatMap((entry) =>
    entry.srcRoute ? [entry.srcRoute] : [],
  ),
  ...Object.keys(prerender.routes ?? {}),
])

const dynamicPages = Object.entries(appRoutes)
  .filter(([appPath]) => appPath.endsWith('/page'))
  .map(([, routePath]) => routePath)
  .filter((routePath) => !prerenderedSrcRoutes.has(routePath))
  .filter((routePath) => !allowedDynamic.has(routePath))

for (const route of allowedDynamic) {
  if (prerenderedSrcRoutes.has(route)) {
    warnings.push(
      `--allow-dynamic=${route} is stale: that route prerenders now, drop the exemption`,
    )
  }
}

if (dynamicPages.length > 0) {
  errors.push(
    `${dynamicPages.length} page route(s) are NOT prerendered, so Next streams their ` +
      `metadata into <body> where Googlebot ignores canonical/description:\n` +
      dynamicPages.map((routePath) => `      - ${routePath}`).join('\n') +
      `\n    Usual cause: a layout or page became dynamic (headers(), cookies(), ` +
      `searchParams, force-dynamic), or a dynamic segment lost generateStaticParams.` +
      `\n    If a route is dynamic on purpose and carries no SEO weight, exempt it ` +
      `with --allow-dynamic=<route>.`,
  )
}

// ------------------------------------------------------- 2. prerendered <head>

const LOCAL_HOST_PATTERN =
  /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[?::1\]?)(:|\/|$)/i

function collectHtml(dir) {
  const found = []
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return found
  }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) found.push(...collectHtml(full))
    else if (entry.endsWith('.html')) found.push(full)
  }
  return found
}

const htmlFiles = collectHtml(join(distDir, 'server', 'app'))

/**
 * Redirect shells (`redirect('/en')`) and the 404 page legitimately carry no
 * canonical. Next writes the real status next to the HTML in a `.meta` sibling,
 * which is a far better signal than sniffing the markup.
 */
function isIndexablePage(file) {
  try {
    const meta = JSON.parse(
      readFileSync(file.replace(/\.html$/, '.meta'), 'utf8'),
    )
    if (typeof meta.status === 'number' && meta.status !== 200) return false
  } catch {
    // No .meta sibling — fall through to the markup check below.
  }
  return true
}

let checkedPages = 0

for (const file of htmlFiles) {
  const rel = file.slice(distDir.length + 1)
  if (!isIndexablePage(file)) continue

  const html = readFileSync(file, 'utf8')
  // Next stamps this on error/redirect shells that have no .meta status.
  if (html.includes('id="__next_error__"')) continue
  checkedPages += 1

  const headEnd = html.indexOf('</head>')
  if (headEnd === -1) {
    errors.push(`${rel}: no </head> in output`)
    continue
  }

  const head = html.slice(0, headEnd)
  const body = html.slice(headEnd)
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(head)

  if (!canonical) {
    if (/<link rel="canonical"/.test(body)) {
      errors.push(
        `${rel}: canonical is in <body>, not <head> (metadata streaming)`,
      )
    } else {
      errors.push(`${rel}: no rel=canonical in <head>`)
    }
    continue
  }

  if (LOCAL_HOST_PATTERN.test(canonical[1])) {
    errors.push(
      `${rel}: canonical points at a local origin (${canonical[1]}). ` +
        "NEXT_PUBLIC_SITE_URL / the site's productionUrl did not reach this build.",
    )
  }

  if (!/<meta name="description"/.test(head)) {
    warnings.push(`${rel}: no meta description in <head>`)
  }
}

// ---------------------------------------------------------- 3. sitemap/robots

for (const name of ['sitemap.xml.body', 'robots.txt.body']) {
  let contents
  try {
    contents = readFileSync(join(distDir, 'server', 'app', name), 'utf8')
  } catch {
    continue
  }
  if (LOCAL_HOST_PATTERN.test(contents) || contents.includes('//localhost')) {
    errors.push(`${name}: contains a localhost origin`)
  }
}

// ------------------------------------------------------------------- 4. report

if (checkedPages === 0) {
  errors.push(
    `no indexable prerendered HTML found under ${join(distDir, 'server', 'app')} — ` +
      'either the build did not run, or every page now renders dynamically.',
  )
}

const dedupe = (list) => [...new Set(list)]
const uniqueWarnings = dedupe(warnings)
const uniqueErrors = dedupe(errors)

for (const warning of uniqueWarnings.slice(0, 10)) {
  console.warn(`  ⚠ ${warning}`)
}
if (uniqueWarnings.length > 10) {
  console.warn(`  ⚠ …and ${uniqueWarnings.length - 10} more warnings`)
}

if (uniqueErrors.length > 0) {
  console.error('\n✗ verify-static-seo failed:\n')
  for (const error of uniqueErrors.slice(0, 10)) {
    console.error(`  ✗ ${error}\n`)
  }
  if (uniqueErrors.length > 10) {
    console.error(`  ✗ …and ${uniqueErrors.length - 10} more errors`)
  }
  process.exit(1)
}

console.log(
  `✓ verify-static-seo: ${checkedPages} indexable prerendered pages ` +
    `(of ${htmlFiles.length} HTML outputs), metadata in <head>, no localhost origins.`,
)
