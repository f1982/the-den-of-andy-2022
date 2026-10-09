import React from 'react'

import { StaticImageData } from 'next/image'

import {
  CutoutImage,
  HandNote,
  Pin,
  SectionHead,
  denCutouts,
} from '@/components/den'
import { cn } from '@/components/ui/utils'

import {
  PrintableURL,
  RCPlanesAlbumURL,
  YouTubeChannelURL,
} from '@/config/links'

import { HomeDictionary } from './home-data'

type CardKey = Extract<
  keyof HomeDictionary['den']['home']['den']['cards'],
  string
>

const CARDS: {
  key: CardKey
  image: StaticImageData
  pin: 'pen' | 'highlighter' | 'ink'
  href: string
  external?: boolean
  className: string
}[] = [
  {
    key: 'code',
    image: denCutouts.laptop,
    pin: 'pen',
    href: '#works',
    className: '-rotate-[1.2deg]',
  },
  {
    key: 'make',
    image: denCutouts.printer,
    pin: 'highlighter',
    href: PrintableURL,
    external: true,
    className: 'rotate-[0.8deg] desk:translate-y-[26px]',
  },
  {
    key: 'fly',
    image: denCutouts.rcplane,
    pin: 'ink',
    href: RCPlanesAlbumURL,
    external: true,
    className: '-rotate-[0.6deg] desk:translate-y-[6px]',
  },
  {
    key: 'film',
    image: denCutouts.camera,
    pin: 'pen',
    href: YouTubeChannelURL,
    external: true,
    className: 'rotate-[1.4deg] desk:translate-y-[34px]',
  },
]

/** § 01 — four pinned cards: code, make, fly, film. */
export function DenCardsSection({ dict }: { dict: HomeDictionary }) {
  const den = dict.den.home.den

  return (
    <section
      id="den"
      aria-labelledby="den-title"
      className="page-wrap scroll-mt-8 pt-24 desk:pt-[150px]">
      <SectionHead
        id="den-title"
        kicker={den.kicker}
        title={den.title}
        aside={
          <HandNote
            as="p"
            size={28}
            rotate={-3}
            className="max-w-[300px] desk:text-right">
            {den.aside}
          </HandNote>
        }
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-[30px]">
        {CARDS.map((card) => {
          const copy = den.cards[card.key]
          return (
            <article
              key={card.key}
              className={cn(
                'relative flex flex-col gap-3 paper-card px-5 pt-5 pb-[26px]',
                card.className,
              )}>
              <Pin color={card.pin} />
              <div className="mb-2 grid h-[200px] place-items-center rounded-[2px] bg-sand">
                <CutoutImage
                  src={card.image}
                  small
                  sizes="240px"
                  className="max-h-[160px] w-auto max-w-[76%]"
                />
              </div>
              <p className="font-mono text-xs text-graphite">{copy.tag}</p>
              <h3 className="font-serif text-4xl leading-none font-normal">
                {copy.title}
              </h3>
              <p className="text-[15px] text-pretty text-ink-soft">
                {copy.body}
              </p>
              <a
                href={card.href}
                {...(card.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="mt-auto inline-flex items-center gap-2 self-start border-b border-current pt-1.5 pb-0.5 text-sm font-medium hover:text-pen">
                {copy.link}
                {card.external && (
                  <span className="sr-only">
                    {' '}
                    {dict.den.common.opensInNewTab}
                  </span>
                )}
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
