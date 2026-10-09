// Pre-renders Markdown content (blog posts and app legal pages) to HTML at
// build time and writes it to src/generated/content.json. Pages import that
// JSON, so remark and js-yaml never ship in the Cloudflare Worker and no
// Markdown is parsed per request.
//
// Runs automatically before `pnpm dev` and `pnpm build`.

import { existsSync } from 'node:fs'
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { load } from 'js-yaml'
import { remark } from 'remark'
import html from 'remark-html'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const postsDir = path.join(root, 'src/content/posts')
const mdDir = path.join(root, 'src/assets/md')
const outFile = path.join(root, 'src/generated/content.json')

// Keep in sync with `cdnUrl` in src/config/site-config.ts.
const articleImageUrl =
  'https://raw.githubusercontent.com/f1982/planet-of-images/main/andycao-24/articles'
const TEST_BLOG_POST = 'test-post-with-all-kinds-of-format'

const locales = ['en', 'zh-CN']

// Parse YAML front matter from a Markdown string.
function matter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }
  return { data: load(match[1]) ?? {}, content: match[2] }
}

function addImageAltText(markdown) {
  return markdown.replace(/!\[\]\(([^)\s]+)\)/g, (_match, source) => {
    const fileName = decodeURIComponent(source.split('/').pop() ?? 'image')
    const alt = fileName
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    return `![${alt || 'Article image'}](${source})`
  })
}

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: true })
    .process(addImageAltText(markdown))
  return result.toString()
}

async function buildPost(slug, locale) {
  const dir = path.join(postsDir, slug)
  const localized = path.join(dir, 'zh-cn.md')
  const file =
    locale === 'zh-CN' && existsSync(localized)
      ? localized
      : path.join(dir, 'index.md')
  const { data, content } = matter(await readFile(file, 'utf8'))

  // Drafts remain available in source control but must not become public,
  // indexable pages or sitemap entries by accident.
  if (data.status === 'draft') return null

  const replaced = content.replace(
    /\/[^\s]+\.(jpg|jpeg|png|gif)/g,
    (match) => `${articleImageUrl}${match}`,
  )

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    keywords: data.keywords,
    author: {
      name: data.author.name,
      picture: data.author.picture,
    },
    content: await markdownToHtml(replaced),
    coverImage: articleImageUrl + data.coverImage,
    date: data.date,
  }
}

async function buildPosts() {
  const entries = await readdir(postsDir, { withFileTypes: true })
  const slugs = entries
    .filter((entry) => entry.isDirectory() && entry.name !== TEST_BLOG_POST)
    .map((entry) => entry.name)

  const posts = {}
  for (const locale of locales) {
    posts[locale] = (
      await Promise.all(slugs.map((slug) => buildPost(slug, locale)))
    )
      .filter(Boolean)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
  return posts
}

async function buildPages() {
  const pages = {
    appPrivacyPolicy: 'app-privacy-policy',
    appSupport: 'app-support',
    appTermsOfUse: 'app-terms-of-use',
  }

  const result = {}
  for (const [key, name] of Object.entries(pages)) {
    result[key] = {
      en: await markdownToHtml(
        await readFile(path.join(mdDir, `${name}.md`), 'utf8'),
      ),
      'zh-CN': await markdownToHtml(
        await readFile(path.join(mdDir, `${name}.zh-CN.md`), 'utf8'),
      ),
    }
  }
  return result
}

const [posts, pages] = await Promise.all([buildPosts(), buildPages()])

await mkdir(path.dirname(outFile), { recursive: true })
await writeFile(outFile, JSON.stringify({ posts, pages }))

console.log(
  `build-content: ${posts.en.length} posts, ${Object.keys(pages).length} pages → ${path.relative(root, outFile)}`,
)
