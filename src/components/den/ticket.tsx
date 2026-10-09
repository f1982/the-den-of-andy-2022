import React from 'react'

import { cn } from '@/components/ui/utils'

import { Barcode } from './marks'

/**
 * Paper ticket: highlighter stub with vertical text, a main body, and a
 * right-hand column with mono meta lines and a barcode. Stacks below 960px.
 */
export function Ticket({
  stub,
  children,
  meta,
  barcode = true,
  ariaLabel,
  as: Tag = 'aside',
  className,
  mainClassName,
}: {
  /** Stub text, e.g. 'ADMIT ONE · THE DEN'. */
  stub: string
  /** Main column content (kicker, serif title, pill links…). */
  children: React.ReactNode
  /** Right column text, e.g. ['NO. 0007', 'SEAT: ANY', 'AUCKLAND, NZ']. */
  meta?: React.ReactNode[] | React.ReactNode
  barcode?: boolean
  ariaLabel?: string
  as?: 'aside' | 'section' | 'div'
  className?: string
  mainClassName?: string
}) {
  const metaLines = Array.isArray(meta) ? meta : meta ? [meta] : []
  const hasSide = metaLines.length > 0 || barcode

  return (
    <Tag
      aria-label={ariaLabel}
      className={cn(
        'relative grid grid-cols-1 overflow-hidden rounded-md bg-card shadow-[0_0_0_1px_rgba(28,27,25,0.08),0_40px_60px_-40px_rgba(40,30,10,0.55)]',
        hasSide
          ? 'desk:grid-cols-[120px_minmax(0,1fr)_220px]'
          : 'desk:grid-cols-[120px_minmax(0,1fr)]',
        className,
      )}>
      <div className="grid place-items-center border-b-2 border-dashed border-ink/25 bg-highlighter p-3.5 desk:border-r-2 desk:border-b-0 desk:p-0">
        <span className="font-mono text-xs tracking-[0.2em] whitespace-nowrap desk:-rotate-90">
          {stub}
        </span>
      </div>
      <div
        className={cn(
          'flex flex-col gap-4 px-6 py-8 desk:px-12 desk:py-11',
          mainClassName,
        )}>
        {children}
      </div>
      {hasSide && (
        <div className="flex flex-col justify-between gap-3.5 border-t-2 border-dashed border-ink/25 px-6 py-6 desk:border-t-0 desk:border-l-2 desk:px-[30px] desk:py-9">
          {metaLines.length > 0 && (
            <p className="font-mono text-[11px] leading-[1.7] text-graphite">
              {metaLines.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </p>
          )}
          {barcode && <Barcode className="h-16" />}
        </div>
      )}
    </Tag>
  )
}
