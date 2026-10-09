import React from 'react'

import { HandNote, SectionHead } from '@/components/den'
import { cn } from '@/components/ui/utils'

import type { AboutCopy } from '../about-types'

const START = 2005
const SPAN = 20
const YEAR_LABELS = [2005, 2010, 2015, 2020, 2025]

/**
 * Where each event sits on the ruler, in dictionary order: above (`up`) or
 * below the track, how long its stem is, and whether the label hangs to the
 * left of the stem (`end`) so it doesn't run off the right edge.
 */
const LAYOUT: { side: 'up' | 'down'; long?: boolean; align?: 'end' }[] = [
  { side: 'up' },
  { side: 'down' },
  { side: 'up' },
  { side: 'down', align: 'end' },
  { side: 'up', align: 'end' },
  { side: 'down', align: 'end' },
  { side: 'up', long: true },
  { side: 'down', long: true, align: 'end' },
]

// Ruler geometry (desktop): 380px tall, track from 180px to 214px.
const STEM_UP = { short: 60, long: 116 }
const STEM_DOWN = { short: 40, long: 92 }
const LABEL_UP_BOTTOM = { short: 266, long: 322 }
const LABEL_DOWN_TOP = { short: 258, long: 310 }

function percent(year: string) {
  const value = ((Number(year) - START) / SPAN) * 100
  return Math.min(100, Math.max(0, value))
}

/** 04 — "Twenty years, one ruler": a horizontal timeline on a ruler. */
export function HistoryRuler({ copy }: { copy: AboutCopy['history'] }) {
  const lastIndex = copy.events.length - 1

  return (
    <section aria-label={copy.ariaLabel} className="pt-[100px] desk:pt-[180px]">
      <SectionHead
        kicker={copy.kicker}
        title={copy.title}
        titleClassName="text-[60px] desk:text-[96px]"
        aside={
          <HandNote as="p" size={26} rotate={-2}>
            {copy.aside}
          </HandNote>
        }
      />

      <div className="relative desk:h-[380px]">
        {/* Track, year marks and stems are decoration only. */}
        <div aria-hidden="true" className="hidden desk:block">
          <div className="absolute inset-x-0 top-[180px] h-[34px] bg-card bg-[image:repeating-linear-gradient(90deg,rgba(28,27,25,0.8)_0_1px,transparent_1px_5%),repeating-linear-gradient(90deg,rgba(28,27,25,0.4)_0_1px,transparent_1px_1%)] bg-[length:100%_16px,100%_8px] bg-no-repeat shadow-[0_0_0_1px_rgba(28,27,25,0.12),0_16px_26px_-18px_rgba(40,30,10,0.4)]" />
          {YEAR_LABELS.map((year) => (
            <span
              key={year}
              className="absolute top-[224px] -translate-x-1/2 font-mono text-[11px] text-graphite"
              style={{ left: `${percent(String(year))}%` }}>
              {year}
            </span>
          ))}
          {copy.events.map((event, i) => {
            const layout = LAYOUT[i] ?? { side: i % 2 ? 'down' : 'up' }
            const length = layout.long ? 'long' : 'short'
            const up = layout.side === 'up'
            return (
              <span
                key={event.year}
                className={cn(
                  'absolute w-px bg-ink',
                  "after:absolute after:-left-1 after:size-[9px] after:rounded-full after:bg-ink after:content-['']",
                  up
                    ? 'bottom-[200px] after:-top-1'
                    : 'top-[214px] after:-bottom-1',
                )}
                style={{
                  left: `${percent(event.year)}%`,
                  height: up ? STEM_UP[length] : STEM_DOWN[length],
                }}
              />
            )
          })}
        </div>

        <ol className="flex flex-col gap-4 desk:absolute desk:inset-0 desk:block">
          {copy.events.map((event, i) => {
            const layout = LAYOUT[i] ?? { side: i % 2 ? 'down' : 'up' }
            const length = layout.long ? 'long' : 'short'
            const up = layout.side === 'up'
            const end = layout.align === 'end'
            const x = percent(event.year)
            return (
              <li
                key={event.year}
                className={cn(
                  'flex flex-col gap-1 text-[13px] leading-[1.35] desk:absolute desk:w-40',
                  // Absolute placement only applies on the desk layout.
                  end ? 'desk:right-(--x)' : 'desk:left-(--x)',
                  up ? 'desk:bottom-(--y)' : 'desk:top-(--y)',
                  end && 'desk:items-end desk:text-right',
                )}
                style={
                  {
                    '--x': end ? `${100 - x}%` : `${x}%`,
                    '--y': `${up ? LABEL_UP_BOTTOM[length] : LABEL_DOWN_TOP[length]}px`,
                  } as React.CSSProperties
                }>
                <b
                  className={cn(
                    'font-mono text-xs font-medium',
                    i === lastIndex && 'w-fit bg-highlighter px-1',
                  )}>
                  {event.year}
                </b>
                <span>{event.text}</span>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
