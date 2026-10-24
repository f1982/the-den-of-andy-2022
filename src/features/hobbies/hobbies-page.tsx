import React from 'react'

import type en from '@/dictionaries/en.json'
import { StaticImageData } from 'next/image'

import {
  CircledNumber,
  CutoutImage,
  HandNote,
  Kicker,
  PillLink,
  Pin,
  RichText,
  denCutouts,
} from '@/components/den'
import { cn } from '@/components/ui/utils'

import {
  BilibiliURL,
  DrawingAlbumURL,
  PrintableURL,
  RCDevicesAlbumURL,
  RCPlanesAlbumURL,
  ThingiverseURL,
  YouTubeURL,
} from '@/config/links'

type Dict = typeof en

type Chapter = {
  /** Anchor id (the RC one keeps its old `#rc-hobby-id`). */
  id: string
  title: string
  description: string
  kicker: string
  note: string
  image: StaticImageData
  imageClassName: string
  imageRotate: number
  extra?: {
    image: StaticImageData
    className: string
    rotate: number
  }
  buttons: { label: string; href: string }[]
}

function getChapters(dict: Dict): Chapter[] {
  const h = dict.hobbies
  const c = dict.den.hobbies.chapters
  const button = (label: string | undefined, href: string) =>
    label ? [{ label, href }] : []

  return [
    {
      id: '3d-printing',
      title: h.print3d.title,
      description: h.print3d.description,
      kicker: c.print3d.kicker,
      note: c.print3d.note,
      image: denCutouts.printer,
      imageClassName: 'w-[58%]',
      imageRotate: -3,
      extra: {
        image: denCutouts.filament,
        className: 'right-[4%] bottom-[6%] w-[30%]',
        rotate: 10,
      },
      buttons: [
        ...button(h.print3d.button1, ThingiverseURL),
        // The Chinese dictionary has no second label.
        ...button(
          (h.print3d as { button2?: string }).button2 ?? 'Printables',
          PrintableURL,
        ),
      ],
    },
    {
      id: 'rc-hobby-id',
      title: h.rc.title,
      description: h.rc.description,
      kicker: c.rc.kicker,
      note: c.rc.note,
      image: denCutouts.rcplane,
      imageClassName: 'w-[92%]',
      imageRotate: -6,
      extra: {
        image: denCutouts.drone,
        className: 'right-0 -bottom-[4%] w-[44%]',
        rotate: 8,
      },
      buttons: [
        ...button(h.rc.button1, RCPlanesAlbumURL),
        ...button(h.rc.button2, RCDevicesAlbumURL),
      ],
    },
    {
      id: 'drawing',
      title: h.drawing.title,
      description: h.drawing.description,
      kicker: c.drawing.kicker,
      note: c.drawing.note,
      image: denCutouts.sketchbook,
      imageClassName: 'w-[86%]',
      imageRotate: 4,
      extra: {
        image: denCutouts.crayon,
        className: 'left-[2%] bottom-0 w-[26%]',
        rotate: -12,
      },
      buttons: button(h.drawing.button1, DrawingAlbumURL),
    },
    {
      id: 'video-editing',
      title: h.video.title,
      description: h.video.description,
      kicker: c.video.kicker,
      note: c.video.note,
      image: denCutouts.camera,
      imageClassName: 'w-[62%]',
      imageRotate: -4,
      buttons: [
        ...button(h.video.button1, YouTubeURL),
        ...button(h.video.button2, BilibiliURL),
      ],
    },
  ]
}

function HobbyChapter({
  chapter,
  n,
  reverse,
}: {
  chapter: Chapter
  n: number
  reverse: boolean
}) {
  const headingId = `${chapter.id}-title`

  return (
    <section
      id={chapter.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-t border-dashed border-ink/25 py-16 first:border-t-0 desk:py-24">
      <div className="grid items-center gap-10 desk:grid-cols-2 desk:gap-20">
        <div
          className={cn(
            'relative mx-auto flex w-full max-w-[460px] flex-col items-center',
            reverse && 'desk:order-2',
          )}>
          <div className="relative flex w-full animate-reveal justify-center py-4">
            <CutoutImage
              src={chapter.image}
              rotate={chapter.imageRotate}
              sizes="(max-width: 960px) 80vw, 420px"
              className={chapter.imageClassName}
            />
            {chapter.extra && (
              <CutoutImage
                src={chapter.extra.image}
                rotate={chapter.extra.rotate}
                small
                sizes="(max-width: 960px) 40vw, 200px"
                className={cn(
                  'absolute animate-parallax [--parallax:30px]',
                  chapter.extra.className,
                )}
              />
            )}
          </div>
          <p className="mt-3 flex animate-reveal items-center gap-2 text-ink">
            <CircledNumber n={n} />
            <HandNote size={25} rotate={-2}>
              {chapter.note}
            </HandNote>
          </p>
        </div>

        <div className="flex animate-reveal flex-col gap-6 [--stagger:1]">
          <Kicker>{chapter.kicker}</Kicker>
          <h2
            id={headingId}
            className="font-serif text-[48px] leading-[0.92] font-normal tracking-[-0.02em] text-balance desk:text-[76px]">
            {chapter.title}
          </h2>
          <p className="max-w-[58ch] text-[16px] leading-[1.75] text-pretty text-ink-soft desk:text-[17px]">
            {chapter.description}
          </p>
          {chapter.buttons.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1">
              {chapter.buttons.map((b, i) => (
                <PillLink
                  key={b.href}
                  href={b.href}
                  external
                  arrow
                  variant={i === 0 ? 'ink' : 'line'}>
                  {b.label}
                </PillLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/** /hobbies: grid-paper hero with a pinned contents card, then four chapters. */
export default function HobbiesPage({ dict }: { dict: Dict }) {
  const copy = dict.den.hobbies
  const chapters = getChapters(dict)

  return (
    <>
      <header className="overflow-x-clip border-b border-ink/15 bg-grid-paper">
        <div className="page-wrap grid items-center gap-14 pt-14 pb-16 desk:grid-cols-[minmax(0,1fr)_340px] desk:pt-20 desk:pb-24">
          <div className="flex flex-col gap-7">
            <Kicker className="animate-rise">{copy.hero.kicker}</Kicker>
            <h1 className="animate-rise font-serif text-[60px] leading-[0.88] font-normal tracking-[-0.03em] text-balance [--stagger:1] desk:text-[124px]">
              <RichText text={copy.hero.title} />
            </h1>
            <p className="max-w-[44ch] animate-rise text-[17px] leading-[1.6] text-pretty text-ink-soft [--stagger:2]">
              {copy.hero.lede}
            </p>
            <HandNote
              size={26}
              rotate={-2}
              className="animate-rise [--stagger:6]">
              {copy.hero.note}
            </HandNote>
          </div>

          <nav
            aria-label={copy.hero.contents}
            className="relative mx-auto w-full max-w-[340px] rotate-[1.5deg] animate-place paper-card px-6 pt-8 pb-5 [--stagger:3] [--tilt:-4deg]">
            <Pin color="pen" />
            <Kicker as="h2" className="mb-3">
              {copy.hero.contents}
            </Kicker>
            <ol>
              {chapters.map((chapter, i) => (
                <li
                  key={chapter.id}
                  className="border-b border-dashed border-ink/20 last:border-b-0">
                  <a
                    href={`#${chapter.id}`}
                    className="group flex min-h-12 items-center gap-3 font-serif text-[26px] leading-none transition-colors duration-300 hover:text-pen">
                    <CircledNumber
                      n={i + 1}
                      className="transition-transform duration-500 ease-spring group-hover:scale-110 group-hover:-rotate-12"
                    />
                    <span className="transition-transform duration-500 ease-spring group-hover:translate-x-1">
                      {chapter.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </header>

      <div className="page-wrap overflow-x-clip pt-8 pb-16 desk:pb-24">
        {chapters.map((chapter, i) => (
          <HobbyChapter
            key={chapter.id}
            chapter={chapter}
            n={i + 1}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </>
  )
}
