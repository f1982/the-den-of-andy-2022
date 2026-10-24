import content from '@/generated/content.json'

import { localizedPath } from '@/utils/locale-path'

import { locales } from '@/config/i18n'
import { BLOG_PATH } from '@/config/menu-data'

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

/** Locales with a real translation of `slug` (English always has one). */
export function getPostLocales(slug: string) {
  return locales.filter(
    (locale) => getPostDetail(slug, locale)?.contentLocale === locale,
  )
}

/**
 * Public path of a post as seen from `locale`. Untranslated posts link
 * straight to the English URL, not to the fallback copy under the locale
 * prefix, so internal links always point at the canonical page.
 */
export function postPath(slug: string, locale: string) {
  const contentLocale = getPostDetail(slug, locale)?.contentLocale ?? locale
  return localizedPath(contentLocale, `${BLOG_PATH}/${slug}`)
}
