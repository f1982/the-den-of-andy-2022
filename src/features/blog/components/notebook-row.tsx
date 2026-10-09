import React from 'react'

import Link from 'next/link'

import { HandNote, Tape } from '@/components/den'

import { NotebookEntry } from '../notebook-data'
import { NotebookVisualImage } from './notebook-visual'

// Thumbnails and the hover pop-out share one `sizes`, so the browser fetches
// each picture once.
const SIZES = '264px'

/**
 * One notebook entry: date, thumbnail, serif title, summary, tags, read time
 * and a round arrow. On hover (wide screens) the title gets the highlighter
 * and a taped print of the picture pops out over the right edge.
 */
export function NotebookRow({
  entry,
  tags,
  readTime,
  readAriaLabel,
}: {
  entry: NotebookEntry
  /** Category labels. */
  tags: string[]
  /** "4 min" */
  readTime: string
  /** "Read DIY one-key keyboard…" */
  readAriaLabel: string
}) {
  return (
    <div className="group/row relative grid grid-cols-[96px_minmax(0,1fr)] items-center gap-x-4 gap-y-3 border-b border-dashed border-ink/28 py-[26px] desk:grid-cols-[84px_132px_minmax(0,1fr)_90px] desk:gap-x-7">
      <p className="col-span-full font-mono text-[13px] leading-[1.3] desk:col-span-1">
        <time dateTime={entry.date}>{entry.dayMonth}</time>
      </p>

      <NotebookVisualImage
        visual={entry.visual}
        sizes={SIZES}
        className="h-[76px] w-[96px] rounded-[2px] desk:h-[96px] desk:w-[132px]"
      />

      <div className="min-w-0">
        <h3 className="font-serif text-[28px] leading-[1.02] font-normal tracking-[-0.01em] text-balance desk:text-[38px]">
          <Link
            href={entry.href}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pen">
            <span className="group-focus-within/row:hl group-hover/row:hl">
              {entry.title}
            </span>
          </Link>
        </h3>
        <p className="mt-2 max-w-[640px] text-[15px] text-pretty text-ink-soft">
          {entry.summary}
        </p>
        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full px-2 py-[3px] font-mono text-[11px] text-ink-soft shadow-[inset_0_0_0_1px_rgba(28,27,25,0.22)]">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="hidden flex-col items-end gap-2.5 text-right font-mono text-xs text-graphite desk:flex">
        <span>{readTime}</span>
        <Link
          href={entry.href}
          aria-label={readAriaLabel}
          className="relative z-[1] grid size-11 place-items-center rounded-full text-ink shadow-[inset_0_0_0_1px_rgba(28,27,25,0.25)] transition-colors group-hover/row:bg-ink group-hover/row:text-paper group-hover/row:shadow-none hover:bg-pen! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen">
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-10 z-[3] hidden w-[260px] scale-90 rotate-[2deg] opacity-0 transition-[opacity,scale,rotate] duration-300 ease-out group-hover/row:scale-100 group-hover/row:rotate-[5deg] group-hover/row:opacity-100 motion-reduce:transition-none desk:block">
        <div className="polaroid" style={{ padding: '10px 10px 40px' }}>
          <Tape width={80} height={24} />
          <NotebookVisualImage
            visual={entry.visual}
            sizes={SIZES}
            cutoutWidth="70%"
            className="h-[180px]"
          />
          {entry.shortCaption && (
            <HandNote
              ink
              size={22}
              className="absolute bottom-2 left-3.5 max-w-[calc(100%-28px)] truncate">
              {entry.shortCaption}
            </HandNote>
          )}
        </div>
      </div>
    </div>
  )
}
