import React from 'react'

import { StaticImageData } from 'next/image'

import {
  CutoutImage,
  HandArrow,
  HandNote,
  Kicker,
  PillLink,
  RichText,
  denCutouts,
} from '@/components/den'

import SVGAnimation from './logo-animation'

interface WelcomeProps {
  kicker: string
  /** Serif greeting; `*word*` is set in italic. */
  title: string
  subtitle: string
  label: string
  /** Accessible name of the Enter link (must contain `label`). */
  ariaLabel?: string
  note?: string
  link?: string
}

/**
 * Decorative cut-outs scattered round the splash (behind the text). They are
 * set down one by one; the plane is the LCP image, so it is preloaded and
 * lands first.
 */
const OBJECTS: {
  src: StaticImageData
  rotate: number
  className: string
  preload?: boolean
  /** Idle float (classes for the photo). */
  drift?: string
}[] = [
  {
    src: denCutouts.rcplane,
    rotate: -10,
    className:
      '-right-[10%] top-[4%] w-[46%] desk:right-[5%] desk:top-[9%] desk:w-[22%]',
    preload: true,
    drift:
      'animate-drift [--drift-duration:9s] [--drift-r:-1.6deg] [--drift-y:-9px]',
  },
  {
    src: denCutouts.coffee,
    rotate: 6,
    className:
      '-left-[6%] bottom-[3%] w-[34%] desk:left-[7%] desk:bottom-[9%] desk:w-[13%]',
  },
  {
    src: denCutouts.printer,
    rotate: -4,
    className: 'hidden desk:block desk:left-[6%] desk:top-[12%] desk:w-[11%]',
  },
  {
    src: denCutouts.camera,
    rotate: 8,
    className:
      'hidden desk:block desk:right-[8%] desk:bottom-[10%] desk:w-[12%]',
  },
]

/** "/" splash: grid paper, logo, serif greeting and an ink Enter pill. */
const DefaultWelcome = ({
  kicker,
  title,
  subtitle,
  label,
  ariaLabel,
  note,
  link = '/home',
}: WelcomeProps) => (
  <div className="relative flex min-h-dvh flex-1 flex-col overflow-hidden bg-grid-paper">
    <div aria-hidden="true">
      {OBJECTS.map((o, i) => (
        <span
          key={i}
          className={`absolute block animate-place ${o.className}`}
          style={
            {
              '--stagger': i === 0 ? 0 : i + 3,
              '--tilt': i % 2 ? '-5deg' : '5deg',
            } as React.CSSProperties
          }>
          <CutoutImage
            src={o.src}
            rotate={o.rotate}
            small
            preload={o.preload}
            sizes="(max-width: 960px) 45vw, 300px"
            className={o.drift}
          />
        </span>
      ))}
    </div>

    <main className="relative z-10 m-auto flex flex-col items-center gap-6 px-4 py-24 text-center">
      <SVGAnimation className="w-14 animate-pop desk:w-16" />
      <Kicker className="animate-rise [--stagger:1]">{kicker}</Kicker>
      <h1 className="animate-rise font-serif text-[64px] leading-[0.9] font-normal tracking-[-0.03em] text-balance [--stagger:2] desk:text-[132px]">
        <RichText text={title} />
      </h1>
      <p className="animate-rise text-[17px] text-ink-soft [--stagger:3] desk:text-[19px]">
        {subtitle}
      </p>
      <div className="relative mt-3 flex animate-rise flex-col items-center gap-4 [--stagger:4] desk:block">
        <PillLink
          href={link}
          ariaLabel={ariaLabel}
          className="h-12 px-8 text-[15px]">
          {label} <span aria-hidden="true">→</span>
        </PillLink>
        {note && (
          <span className="flex items-end gap-1 desk:absolute desk:top-1/2 desk:left-full desk:ml-5 desk:-translate-y-1/2">
            <HandArrow
              variant="left"
              className="hidden animate-draw-in desk:block"
              style={{ '--stagger': 10 } as React.CSSProperties}
            />
            <HandNote
              size={24}
              rotate={-4}
              className="animate-rise text-left [--stagger:8]">
              {note}
            </HandNote>
          </span>
        )}
      </div>
    </main>
  </div>
)

export default DefaultWelcome
