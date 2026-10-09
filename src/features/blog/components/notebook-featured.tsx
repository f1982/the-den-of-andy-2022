import React from 'react'

import Link from 'next/link'

import {
  CutoutImage,
  HandNote,
  PillLink,
  RichText,
  Tape,
} from '@/components/den'

import { NotebookEntry } from '../notebook-data'
import { NotebookVisualImage } from './notebook-visual'

/** The latest entry: a big taped print, title, body, parts and buttons. */
export function NotebookFeatured({
  entry,
  labels,
}: {
  entry: NotebookEntry
  labels: {
    latest: string
    read: string
    watch: string
    categories: string[]
    readTime: string
    opensInNewTab: string
  }
}) {
  const { visual } = entry

  return (
    <article className="grid grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] items-center gap-12 pt-16 pb-10 desk:gap-[72px] desk:pt-[110px]">
      <Link
        href={entry.href}
        tabIndex={-1}
        aria-hidden="true"
        className="polaroid -rotate-[1.6deg] transition-transform duration-300 hover:-rotate-[0.6deg]"
        style={{ padding: '16px 16px 64px' }}>
        <Tape width={130} rotate={-3} />
        {visual.kind === 'cutout' ? (
          <span
            className="relative grid h-[280px] place-items-center overflow-hidden desk:h-[470px]"
            style={{ background: visual.background }}>
            <CutoutImage
              src={visual.src}
              sizes="(max-width: 960px) 64vw, 380px"
              preload
              className="w-[64%]"
            />
            {visual.accent && (
              <CutoutImage
                src={visual.accent}
                rotate={12}
                sizes="140px"
                className="absolute right-[6%] bottom-[6%] w-[22%]"
              />
            )}
          </span>
        ) : (
          <NotebookVisualImage
            visual={visual}
            sizes="(max-width: 960px) 100vw, 600px"
            preload
            className="h-[280px] desk:h-[470px]"
          />
        )}
        {entry.caption && (
          <HandNote
            ink
            size={30}
            className="absolute bottom-3.5 left-[22px] max-w-[calc(100%-44px)] truncate">
            {entry.caption}
          </HandNote>
        )}
      </Link>

      <div className="flex flex-col gap-6">
        <p className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-graphite">
          <span className="text-ink">{labels.latest}</span>
          {labels.categories.slice(0, 1).map((label) => (
            <span key={label}>{label}</span>
          ))}
          <time dateTime={entry.date}>{entry.longDate}</time>
          <span>{labels.readTime}</span>
        </p>
        <h2 className="font-serif text-[46px] leading-[0.95] font-normal tracking-[-0.02em] text-balance desk:text-[76px]">
          <Link
            href={entry.href}
            className="rounded-sm hover:text-pen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pen">
            <RichText text={entry.featuredTitle} />
          </Link>
        </h2>
        <p className="max-w-[500px] text-[17px] text-pretty text-ink-soft">
          {entry.featuredBody}
        </p>
        {entry.parts.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {entry.parts.map((part) => (
              <li
                key={part}
                className="rounded border border-dashed border-ink/35 px-2.5 py-1.5 font-mono text-xs">
                {part}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-2 flex flex-wrap gap-3">
          <PillLink href={entry.href}>{labels.read}</PillLink>
          {entry.videoUrl && (
            <PillLink
              href={entry.videoUrl}
              variant="line"
              external
              ariaLabel={`${labels.watch.replace(/\s*↗$/, '')} ${labels.opensInNewTab}`}>
              {labels.watch}
            </PillLink>
          )}
        </div>
      </div>
    </article>
  )
}
