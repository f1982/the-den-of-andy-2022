import type { StaticImageData } from 'next/image'

import { localizedPath } from '@/utils/locale-path'

import { denCutouts, denPhotos } from '@/components/den'

import { BLOG_PATH } from '@/config/menu-data'

import { BlogPostData } from './blog-types'

/** Den copy for one post: den.blog.posts.<slug> in the dictionaries. */
export type NotebookPostCopy = {
  caption?: string
  shortCaption?: string
  categories?: string[]
  summary?: string
  featuredTitle?: string
  featuredBody?: string
  parts?: string[]
}

/** The picture shown for a post in the notebook (thumbnail, pop-out, featured). */
export type NotebookVisual =
  | { kind: 'photo'; src: StaticImageData | string }
  | {
      kind: 'cutout'
      src: StaticImageData
      /** Backdrop colour behind the transparent cut-out. */
      background: string
      /** A second, smaller cut-out laid on the featured print. */
      accent?: StaticImageData
    }

const SAGE = '#DCE3C6'
const SAND = '#E6E1D6'

const VISUALS: Record<string, NotebookVisual> = {
  'one-key-keyboard-diy': {
    kind: 'cutout',
    src: denCutouts.keyboard,
    background: SAGE,
    accent: denCutouts.filament,
  },
  'morning-sea-bath-challenge': { kind: 'photo', src: denPhotos.sunrise },
  'summary-of-2022': { kind: 'photo', src: denPhotos.lighthouse },
  'low-maintenance-succulent-plants-on-my-desk-setup': {
    kind: 'photo',
    src: denPhotos.plants,
  },
  'my-wfh-desk-setups-2022': { kind: 'photo', src: denPhotos.desk },
  'new-apple-silicon-m1-pro-macbook-pro-hands-on': {
    kind: 'cutout',
    src: denCutouts.laptop,
    background: SAND,
  },
  'make-a-usb-type-c-holder-on-my-desk': {
    kind: 'photo',
    src: denPhotos.cables,
  },
}

export type NotebookEntry = {
  slug: string
  href: string
  title: string
  /** ISO date from the front matter. */
  date: string
  year: number
  /** "14 Jun" / "6月14日" */
  dayMonth: string
  /** "14 Jun 2024" / "2024年6月14日" */
  longDate: string
  readMinutes: number
  categories: string[]
  summary: string
  caption?: string
  shortCaption?: string
  featuredTitle: string
  featuredBody: string
  parts: string[]
  visual: NotebookVisual
  /** First YouTube link in the post body, if any. */
  videoUrl?: string
  /** Lower-cased text the client-side search matches against. */
  searchText: string
}

/** Minutes to read: ~200 English words or ~400 CJK characters a minute. */
export function getReadMinutes(html: string) {
  const text = html.replace(/<[^>]+>/g, ' ')
  const words = text.match(/[A-Za-z0-9À-ɏ'’-]+/g)?.length ?? 0
  const cjk = text.match(/[㐀-鿿豈-﫿]/g)?.length ?? 0
  return Math.max(1, Math.ceil(words / 200 + cjk / 400))
}

function findVideoUrl(html: string) {
  return html.match(
    /https:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/,
  )?.[0]
}

function intlLocale(locale: string) {
  return locale.startsWith('zh') ? 'zh-CN' : 'en-GB'
}

// Front-matter dates are UTC timestamps; format them in UTC so "14 Jun"
// doesn't become "15 Jun" anywhere.
export function formatPostDate(date: string, locale: string, long = false) {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
    ...(long ? { year: 'numeric' } : {}),
  }).format(new Date(date))
}

export function getPostCopy(
  posts: Record<string, NotebookPostCopy>,
  slug: string,
): NotebookPostCopy {
  return posts[slug] ?? {}
}

export function getPostVisual(post: Pick<BlogPostData, 'slug' | 'coverImage'>) {
  return VISUALS[post.slug] ?? { kind: 'photo', src: post.coverImage }
}

export function toNotebookEntry(
  post: BlogPostData,
  locale: string,
  copy: NotebookPostCopy,
  categoryLabels: Record<string, string>,
): NotebookEntry {
  const categories = copy.categories ?? []
  const summary = copy.summary ?? post.excerpt
  const searchText = [
    post.title,
    summary,
    post.excerpt,
    post.keywords,
    ...categories.map((key) => categoryLabels[key] ?? key),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return {
    slug: post.slug,
    href: localizedPath(locale, `${BLOG_PATH}/${post.slug}`),
    title: post.title,
    date: post.date,
    year: new Date(post.date).getUTCFullYear(),
    dayMonth: formatPostDate(post.date, locale),
    longDate: formatPostDate(post.date, locale, true),
    readMinutes: getReadMinutes(post.content),
    categories,
    summary,
    caption: copy.caption,
    shortCaption: copy.shortCaption ?? copy.caption,
    featuredTitle: copy.featuredTitle ?? post.title,
    featuredBody: copy.featuredBody ?? summary,
    parts: copy.parts ?? [],
    visual: getPostVisual(post),
    videoUrl: findVideoUrl(post.content),
    searchText,
  }
}

/** Group entries (already newest first) by year, newest year first. */
export function groupByYear(entries: NotebookEntry[]) {
  const groups: { year: number; entries: NotebookEntry[] }[] = []
  for (const entry of entries) {
    const last = groups[groups.length - 1]
    if (last && last.year === entry.year) last.entries.push(entry)
    else groups.push({ year: entry.year, entries: [entry] })
  }
  return groups
}
