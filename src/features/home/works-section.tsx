import React from 'react'

import Link from 'next/link'

import { fillTemplate } from '@/utils/fill-template'
import { localizedPath } from '@/utils/locale-path'

import { HandNote, RichText, SectionHead } from '@/components/den'
import { cn } from '@/components/ui/utils'

import { FeaturedWork, HomeDictionary } from './home-data'

const HIGHLIGHT_ROW =
  'linear-gradient(90deg, rgb(223 242 106 / 0), var(--color-highlighter) 6%, var(--color-highlighter) 94%, rgb(223 242 106 / 0))'

/** § 03 — a few favourite projects as a ruled list. */
export function WorksSection({
  dict,
  locale,
  works,
  projectCount,
}: {
  dict: HomeDictionary
  locale: string
  works: FeaturedWork[]
  projectCount: number
}) {
  const copy = dict.den.home.works
  const items = copy.items as Record<string, { title: string; meta: string }>

  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="page-wrap scroll-mt-8 pt-28 desk:pt-[190px]">
      <SectionHead
        id="works-title"
        kicker={copy.kicker}
        title={copy.title}
        aside={
          <HandNote as="p" size={27} rotate={-2}>
            {fillTemplate(copy.aside, { count: projectCount })}
          </HandNote>
        }
      />
      <ol className="border-t border-ink/90">
        {works.map((work, i) => {
          const item = items[work.id]
          const highlighted = Boolean(work.note)
          return (
            <li
              key={work.id}
              className="group relative grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-5 gap-y-1 border-b border-dashed border-ink/28 py-[26px] desk:grid-cols-[64px_minmax(0,1fr)_170px_250px_96px_28px]"
              style={
                highlighted ? { backgroundImage: HIGHLIGHT_ROW } : undefined
              }>
              <span
                className={cn(
                  'font-mono',
                  highlighted ? 'text-ink' : 'text-graphite',
                )}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* The title link stretches over the whole row. */}
              <Link
                href={localizedPath(locale, `/project/${work.id}`)}
                className="font-serif text-[32px] leading-none tracking-[-0.01em] group-hover:text-pen after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-pen desk:text-[46px]">
                <RichText text={item?.title ?? work.title} />
              </Link>
              <span className="hidden text-sm text-ink-soft desk:block">
                {item?.meta ?? work.platform}
              </span>
              <span className="hidden font-mono text-xs text-graphite desk:block">
                {work.tech.join(' · ')}
              </span>
              <span className="col-start-2 font-mono text-[13px] desk:col-start-auto desk:text-right">
                {work.years}
              </span>
              <span
                aria-hidden="true"
                className="hidden transition-transform group-hover:translate-x-1 desk:block">
                →
              </span>
              {work.note && (
                <HandNote
                  size={24}
                  rotate={-3}
                  className="pointer-events-none absolute -top-4 right-2 text-[20px]! desk:-top-[26px] desk:right-[120px] desk:text-[24px]!">
                  {copy.notes[work.note]}
                </HandNote>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
