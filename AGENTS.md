# AGENTS.md — The Den of Andy (andycao.me)

Personal site on Next.js (App Router), deployed to Cloudflare Workers via
OpenNext. See `README.md` for commands. These are the invariants that are easy
to break silently — the build stays green and only Search Console notices.

## SEO invariants

- **Every page must prerender.** Next streams metadata into `<body>` on dynamic
  renders, where Googlebot ignores `rel=canonical` and the meta description. So
  no `headers()` / `cookies()` / `searchParams` / `force-dynamic` in a layout,
  and every dynamic segment keeps `generateStaticParams` and
  `dynamicParams = false`. `open-next.config.ts` serves pages from the read-only static-assets
  cache, which also assumes nothing is dynamic or revalidates.
- **`postbuild` runs `scripts/verify-static-seo.mjs`** and fails the build if
  any page is not prerendered, a canonical is missing from `<head>`, or a
  localhost origin leaks into canonicals / sitemap / robots. Run it alone with
  `pnpm verify:seo` after `pnpm build`.
  - The only exemption is `/[locale]/[...notFound]`: it exists solely to call
    `notFound()` for unknown paths under a valid locale, so it carries no SEO
    weight. Justify any new `--allow-dynamic` entry the same way.
- **Canonical origin is hardcoded** (`siteUrl` in `src/config/site-config.ts`,
  `siteUrl` in `next-sitemap.config.js`). Never add a `|| 'http://localhost…'`
  fallback.
- **Unknown locales must 404.** `[locale]/layout.tsx` sets
  `dynamicParams = false` and calls `notFound()` for anything not in `locales`. The middleware
  skips dotted paths, so without this `/random.xyz` rendered the home page with
  a 200.

## Locale routing

- All pages live under `/en` or `/zh-CN`; `/` and unprefixed paths redirect via
  `Accept-Language` in `src/middleware.ts`. **Keep the `/en` prefix** — moving
  an indexed site's canonicals to `/` risks a sustained ranking drop. Adding a
  locale means updating `locales` in `src/config/i18n.ts`,
  `getLocalizedAlternates`, and the dictionaries.

## Middleware

- `src/middleware.ts` 301s plain-http page requests to https (local hosts
  exempt). It only redirects on an explicit `http` scheme, so a missing signal
  can't loop. Unit tests: `src/middleware.test.ts`.
- `wrangler`/`opennextjs-cloudflare preview` rewrites `Location` headers that
  contain the request host back to `http://`, so a `Host: andycao.me` curl
  against the local preview shows `http://` — that is the dev proxy, not the
  Worker. Trust the unit tests.

## Content

- Blog posts (`src/content/posts`) and app legal pages (`src/assets/md`) are
  rendered to `src/generated/content.json` by `scripts/build-content.mjs`; it
  runs automatically before `dev`, `build` and `typecheck`.
