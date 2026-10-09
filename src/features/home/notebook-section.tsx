import React from 'react'

import Link from 'next/link'

import { fillTemplate } from '@/utils/fill-template'
import { localizedPath } from '@/utils/locale-path'

import { PillLink, Polaroid, SectionHead } from '@/components/den'
import { cn } from '@/components/ui/utils'

import { BlogPostData } from '@/features/blog/blog-types'

import {
  HomeDictionary,
  formatPostDate,
  getPostCopy,
  getPostVisual,
  readingMinutes,
} from './home-data'

// Tilt of each print, its tape, and how far the column drops on wide screens.
const LAYOUT = [
  { rotate: -1.6, tape: 0, className: '' },
  { rotate: 1.2, tape: 5, className: 'desk:mt-16' },
  { rotate: -0.6, tape: -3, className: 'desk:mt-5' },
]

/** § 02 — the three latest posts as taped polaroids. */
export function NotebookSection({
  dict,
  locale,
  posts,
  postCount,
}: {
  dict: HomeDictionary
  locale: string
  posts: BlogPostData[]
  postCount: number
}) {
  const notebook = dict.den.home.notebook
  const categories = dict.den.blog.categories as Record<string, string>

  return (
    <section
      aria-labelledby="notebook-title"
      className="page-wrap pt-28 desk:pt-[190px]">
      <SectionHead
        id="notebook-title"
        kicker={notebook.kicker}
        title={notebook.title}
        aside={
          <PillLink href={localizedPath(locale, '/blog')} variant="line">
            {fillTemplate(notebook.allEntries, { count: postCount })}
          </PillLink>
        }
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-11">
        {posts.map((post, i) => {
          const copy = getPostCopy(dict, post.slug)
          const visual = getPostVisual(post.slug, i)
          const layout = LAYOUT[i % LAYOUT.length]
          const category = copy.categories?.[0]
          const caption =
            copy[visual.caption ?? 'caption'] ?? copy.caption ?? undefined

          return (
            <Link
              key={post.slug}
              href={localizedPath(locale, `/blog/${post.slug}`)}
              className={cn(
                'group flex animate-reveal flex-col gap-3.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-pen',
                layout.className,
              )}
              style={{ '--stagger': i } as React.CSSProperties}>
              <Polaroid
                src={visual.src}
                alt=""
                fit={visual.fit}
                photoClassName={visual.photoClassName}
                caption={caption}
                rotate={layout.rotate}
                tape={layout.tape ? { rotate: layout.tape } : true}
                sizes="(max-width: 960px) 100vw, 400px"
                imageClassName="transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                className="transition-[translate,box-shadow] duration-500 ease-spring group-hover:-translate-y-1.5"
              />
              <p className="mt-3.5 flex flex-wrap gap-3.5 font-mono text-xs text-graphite">
                <time dateTime={post.date}>
                  {formatPostDate(post.date, locale)}
                </time>
                {category && categories[category] && (
                  <span>{categories[category]}</span>
                )}
                <span>
                  {fillTemplate(dict.den.common.minutes, {
                    n: readingMinutes(post.content),
                  })}
                </span>
              </p>
              <h3 className="font-serif text-[34px] leading-[1.02] font-normal text-balance transition-colors duration-300 group-hover:text-pen">
                {post.title}
              </h3>
              {copy.summary && (
                <p className="text-[15px] text-pretty text-ink-soft">
                  {copy.summary}
                </p>
              )}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
