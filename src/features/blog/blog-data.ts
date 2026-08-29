import { format, parseISO } from 'date-fns'
import yaml from 'js-yaml'
import { orderBy } from 'lodash'

import markdownToHtml from '@/utils/markdownToHtml'

import { cdnUrl } from '@/config/site-config'

import { BlogPostData } from './blog-types'

const articleImageUrl = `${cdnUrl}/articles`
const TEST_BLOG_POST = 'test-post-with-all-kinds-of-format'

// Parse YAML front matter from a Markdown string. Replaces gray-matter, whose
// bundled JavaScript engine uses direct eval and triggers a bundler warning.
function matter(raw: string): {
  data: Record<string, any>
  content: string
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) {
    return { data: {}, content: raw }
  }
  const data = (yaml.load(match[1]) as Record<string, any>) ?? {}
  return { data, content: match[2] }
}

// Pre-built blog posts data - this should be generated at build time
const BLOG_POSTS_MANIFEST = [
  'chattts-on-macos',
  'diy-laptop-stand-with-3d-printing',
  'low-maintenance-succulent-plants-on-my-desk-setup',
  'make-a-usb-type-c-holder-on-my-desk',
  'morning-sea-bath-challenge',
  'my-wfh-desk-setups-2022',
  'new-apple-silicon-m1-pro-macbook-pro-hands-on',
  'one-key-keyboard-diy',
  'summary-of-2022',
]

export async function getPostDetail(slug: string, locale = 'en') {
  try {
    const postModule =
      locale === 'zh-CN'
        ? await import(`@/content/posts/${slug}/zh-cn.md`).catch(
            () => import(`@/content/posts/${slug}/index.md`),
          )
        : await import(`@/content/posts/${slug}/index.md`)
    const { data, content } = matter(postModule.default)

    // Drafts remain available in source control but must not become public,
    // indexable pages or sitemap entries by accident.
    if (data['status'] === 'draft') return null

    const replaced = content.replace(
      /\/[^\s]+\.(jpg|jpeg|png|gif)/g,
      (match: string) => {
        return `${articleImageUrl}${match}`
      },
    )
    const htmlContent = await markdownToHtml(replaced)

    const postItem: BlogPostData = {
      slug: slug,
      title: data['title'],
      excerpt: data['excerpt'],
      keywords: data['keywords'],
      author: {
        name: data['author']['name'],
        picture: data['author']['picture'],
      },
      content: htmlContent,
      coverImage: articleImageUrl + data['coverImage'],
      date: data['date'],
    }
    return postItem
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    return null
  }
}

function parseDate(dateStr: string) {
  const date = parseISO(dateStr)
  return format(date, 'LLLL d, yyyy')
}

export async function getPosts(count: number = -1, locale = 'en') {
  let posts: BlogPostData[] = (
    await Promise.all(
      BLOG_POSTS_MANIFEST.map(async (slug) => {
        return await getPostDetail(slug, locale)
      }),
    )
  ).filter((item): item is BlogPostData => item !== null)

  posts = orderBy(posts, (post) => new Date(post.date).getTime(), 'desc')
  posts = posts
    .filter((item) => item?.slug !== TEST_BLOG_POST)
    .filter((item) => item as BlogPostData)

  return posts.splice(0, count > 0 ? count : posts.length)
}
