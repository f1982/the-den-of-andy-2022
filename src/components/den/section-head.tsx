import React from 'react'

import { cn } from '@/components/ui/utils'

import { Kicker } from './marks'
import { RichText } from './rich-text'

export type SectionHeadProps = {
  kicker?: React.ReactNode
  /**
   * Big serif heading. A string goes through <RichText>, so dictionary
   * strings like 'Four things I do\n*in here*' get the italic swap and line
   * break.
   */
  title: React.ReactNode
  /** Right-hand slot: a HandNote, a pill link… */
  aside?: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  className?: string
  titleClassName?: string
}

/** Kicker + big Instrument Serif heading + optional right-hand slot. */
export function SectionHead({
  kicker,
  title,
  aside,
  as: Heading = 'h2',
  id,
  className,
  titleClassName,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        'mb-10 flex animate-reveal flex-wrap items-end justify-between gap-8 desk:mb-14',
        className,
      )}>
      <div className="flex flex-col gap-[18px]">
        {kicker && <Kicker>{kicker}</Kicker>}
        <Heading
          id={id}
          className={cn(
            'font-serif text-[56px] leading-[0.9] font-normal tracking-[-0.02em] text-balance desk:text-[92px]',
            titleClassName,
          )}>
          {typeof title === 'string' ? <RichText text={title} /> : title}
        </Heading>
      </div>
      {aside}
    </div>
  )
}
