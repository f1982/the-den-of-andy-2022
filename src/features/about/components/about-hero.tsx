import React from 'react'

import Image, { StaticImageData } from 'next/image'

import { HandNote, PillLink, RichText, denCutouts } from '@/components/den'

import type { AboutCopy } from '../about-types'
import { IdBadge } from './id-badge'

/** A small cut-out object sitting in a sand pill, inline with the text. */
function ObjectChip({ image }: { image: StaticImageData }) {
  return (
    <span
      aria-hidden="true"
      className="relative mx-[0.14em] inline-flex h-[0.74em] w-[1.75em] items-center justify-center rounded-full bg-[#e4ded0] align-[-0.02em]">
      <Image
        src={image}
        alt=""
        sizes="120px"
        className="absolute top-1/2 left-1/2 h-auto max-h-[1.02em] w-auto max-w-[1.6em] -translate-x-1/2 -translate-y-[58%] -rotate-6 drop-shadow-[0_6px_6px_rgba(60,44,20,0.22)]"
      />
    </span>
  )
}

/** Grid-paper hero: hanging ID badge + the big serif introduction. */
export function AboutHero({ copy }: { copy: AboutCopy }) {
  const { parts } = copy.intro

  return (
    <section className="bg-grid-paper">
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-4 pb-[60px] desk:block desk:h-[900px] desk:px-0 desk:pb-0">
        <IdBadge copy={copy.badge} />

        <div className="flex flex-col gap-[30px] desk:absolute desk:top-[120px] desk:left-[40%] desk:w-[54%]">
          <h1 className="kicker">{copy.intro.kicker}</h1>
          <p className="font-serif text-[38px] leading-[1.08] tracking-[-0.015em] text-pretty desk:text-[66px]">
            {parts.start} <ObjectChip image={denCutouts.laptop} />{' '}
            {parts.middle} <em>{parts.print}</em>{' '}
            <ObjectChip image={denCutouts.printer} />
            {parts.comma} <em>{parts.fly}</em>{' '}
            <ObjectChip image={denCutouts.rcplane} />
            {parts.comma} <em>{parts.draw}</em>{' '}
            <ObjectChip image={denCutouts.sketchbook} /> {parts.and}{' '}
            <em>{parts.film}</em> <ObjectChip image={denCutouts.camera} />{' '}
            <RichText text={parts.end} />
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PillLink href="#contact">{copy.intro.cta}</PillLink>
            <HandNote size={25} className="ml-2.5">
              {copy.intro.pronounce}
            </HandNote>
          </div>
        </div>
      </div>
    </section>
  )
}
