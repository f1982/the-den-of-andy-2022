import { StaticImageData } from 'next/image'

import { denCutouts, denPhotos } from '@/components/den'

import { getPosts } from '@/features/blog/blog-data'
import { BlogPostData } from '@/features/blog/blog-types'
import { ProjectItemData } from '@/features/project/project-types'

import projectData from '@/content/projects.json'

export type HomeDictionary = Awaited<
  ReturnType<typeof import('@/utils/dictionaries').getDictionary>
>

/** Per-post copy from `den.blog.posts.<slug>` (not every post has all keys). */
export type DenPostCopy = {
  caption?: string
  shortCaption?: string
  categories?: string[]
  summary?: string
}

export function getPostCopy(dict: HomeDictionary, slug: string) {
  const posts = dict.den.blog.posts as Record<string, DenPostCopy>
  return posts[slug] ?? {}
}

/** "14 Jun 2024" / "2024年6月14日". Dates are stored in UTC. */
export function formatPostDate(date: string, locale: string) {
  const zh = locale.startsWith('zh')
  return new Intl.DateTimeFormat(zh ? 'zh-CN' : 'en-GB', {
    timeZone: 'UTC',
    day: zh ? 'numeric' : '2-digit',
    month: zh ? 'long' : 'short',
    year: 'numeric',
  }).format(new Date(date))
}

/** Rough reading time of a rendered post, in whole minutes (≥ 1). */
export function readingMinutes(html: string) {
  const text = html.replace(/<[^>]+>/g, ' ')
  const cjk = (text.match(/[㐀-鿿]/g) ?? []).length
  const words = text
    .replace(/[㐀-鿿]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200 + cjk / 400))
}

/** The image treatment of a post on the home page polaroids. */
type PostVisual = {
  src: StaticImageData
  /** `contain` = transparent cut-out on a coloured backdrop. */
  fit?: 'cover' | 'contain'
  photoClassName?: string
  caption?: 'caption' | 'shortCaption'
}

const POST_VISUALS: Record<string, PostVisual> = {
  'one-key-keyboard-diy': {
    src: denCutouts.keyboard,
    fit: 'contain',
    photoClassName: 'bg-[#dce3c6]',
    caption: 'shortCaption',
  },
  'morning-sea-bath-challenge': { src: denPhotos.sunrise },
  'summary-of-2022': { src: denPhotos.lighthouse },
  'low-maintenance-succulent-plants-on-my-desk-setup': {
    src: denPhotos.plants,
  },
  'my-wfh-desk-setups-2022': { src: denPhotos.desk },
  'make-a-usb-type-c-holder-on-my-desk': { src: denPhotos.cables },
}

const FALLBACK_PHOTOS = [denPhotos.desk, denPhotos.plants, denPhotos.cables]

export function getPostVisual(slug: string, index: number): PostVisual {
  return (
    POST_VISUALS[slug] ?? {
      src: FALLBACK_PHOTOS[index % FALLBACK_PHOTOS.length],
    }
  )
}

/** Latest published posts, newest first. */
export function getLatestPosts(locale: string, count = 3): BlogPostData[] {
  return getPosts(count, locale)
}

export function getPostCount(locale: string) {
  return getPosts(-1, locale).length
}

// ---------- Works ----------

const projects = projectData.data.projects as ProjectItemData[]

/** A few favourites from `src/content/projects.json`, in display order. */
const FEATURED_WORKS: {
  id: string
  /** Short stack line (proper names, not translated). */
  tech: string[]
  /** Gets the highlighter row + the handwritten note. */
  note?: 'vodafone'
}[] = [
  {
    id: 'chick-fil-a-design-system',
    tech: ['React', 'TypeScript', 'Storybook'],
  },
  {
    id: 'vodafone-dx-web-mobile-project',
    tech: ['Next.js', 'React Native', 'GraphQL'],
    note: 'vodafone',
  },
  {
    id: 'buck-new-zealand-split-money-app',
    tech: ['React', 'Gatsby', 'Material UI'],
  },
  { id: 'cctv-video-app', tech: ['Objective-C', 'ffmpeg'] },
  { id: 'pew-pew-pew', tech: ['Cocos2d-X', 'C++'] },
]

/** "2022", "2020–21", "2012–15" from a project's start/end dates. */
export function projectYears(start: string, end: string) {
  const from = start.slice(0, 4)
  const to = end?.slice(0, 4)
  if (!to || to === from) return from
  return from.slice(0, 2) === to.slice(0, 2)
    ? `${from}–${to.slice(2)}`
    : `${from}–${to}`
}

export type FeaturedWork = {
  id: string
  title: string
  platform: string
  years: string
  tech: string[]
  note?: 'vodafone'
}

export function getFeaturedWorks(): FeaturedWork[] {
  return FEATURED_WORKS.flatMap((work) => {
    const project = projects.find((p) => p.id === work.id)
    if (!project) return []
    return [
      {
        id: project.id,
        title: project.title,
        platform: project.platform,
        years: projectYears(project.start, project.end),
        tech: work.tech,
        note: work.note,
      },
    ]
  })
}

export const projectCount = projects.length
