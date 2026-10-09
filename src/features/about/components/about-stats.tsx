import { RichText } from '@/components/den'

import type { AboutCopy } from '../about-types'

/** Three big numerals between rules: 2005 / 17+ / 2021. */
export function AboutStats({ copy }: { copy: AboutCopy['stats'] }) {
  return (
    <section
      aria-label={copy.ariaLabel}
      className="grid border-y border-ink/90 desk:grid-cols-3">
      {copy.items.map((item, i) => (
        <div
          key={item.label}
          className={
            i === 0
              ? 'flex flex-col gap-3 pt-10 pr-8 pb-9'
              : 'flex flex-col gap-3 border-t border-dashed border-ink/28 pt-10 pr-8 pb-9 desk:border-t-0 desk:border-l desk:pl-8'
          }>
          <p className="font-serif text-[80px] leading-[0.8] tracking-[-0.03em] desk:text-[120px]">
            <RichText text={item.num} />
          </p>
          <p className="font-mono text-xs text-graphite uppercase">
            {item.label}
          </p>
          <p className="text-[15px] text-ink-soft">{item.body}</p>
        </div>
      ))}
    </section>
  )
}
