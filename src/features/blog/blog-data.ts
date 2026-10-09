import content from '@/generated/content.json'

import { BlogPostData } from './blog-types'

// Posts are pre-rendered to HTML (and sorted newest first) at build time by
// scripts/build-content.mjs.
const postsByLocale = content.posts as Record<string, BlogPostData[]>

function localePosts(locale: string) {
  return postsByLocale[locale] ?? postsByLocale['en']
}

export function getPostDetail(slug: string, locale = 'en') {
  return localePosts(locale).find((post) => post.slug === slug) ?? null
}

export function getPosts(count: number = -1, locale = 'en') {
  const posts = localePosts(locale)
  return count > 0 ? posts.slice(0, count) : posts
}
