import React from 'react'

import Link from 'next/link'

import { fillTemplate } from '@/utils/fill-template'
import { localizedPath } from '@/utils/locale-path'

import {
  CutoutObject,
  CutoutObjectProps,
  HandArrow,
  HandNote,
  Kicker,
  LiveClockChip,
  RichText,
  Tape,
  TerminalCard,
  TerminalLine,
  denCutouts,
} from '@/components/den'
import { cn } from '@/components/ui/utils'

import {
  DrawingAlbumURL,
  PrintableURL,
  YouTubeChannelURL,
} from '@/config/links'

import { HomeDictionary, formatPostDate } from './home-data'

type ObjectKey = Extract<keyof HomeDictionary['den']['home']['objects'], string>

type DeskObject = {
  key: ObjectKey
  href: string
  external?: boolean
  image: CutoutObjectProps['image']
  imageRotate?: number
  /** Wide-screen placement on the 1090px stage + small-screen tweaks. */
  className: string
  /** Width of the photo on the desk, in % of the stage (for `sizes`). */
  deskWidth: number
  labelPosition: CutoutObjectProps['labelPosition']
  labelClassName?: string
  arrow?: React.ReactNode
  /** Masking tape over the top edge (the postcard). */
  tape?: { rotate: number; top: number }
  preload?: boolean
  /** Idle float for things that fly (classes for the photo). */
  drift?: string
}

export function DeskStage({
  dict,
  locale,
  keyboardPost,
}: {
  dict: HomeDictionary
  locale: string
  /** The one-key keyboard post, for the tooltip card. */
  keyboardPost: { slug: string; title: string; date: string } | null
}) {
  const home = dict.den.home
  const desk = home.desk
  const post = (slug: string) => localizedPath(locale, `/blog/${slug}`)

  const objects: DeskObject[] = [
    {
      key: 'keyboard',
      href: post('one-key-keyboard-diy'),
      image: denCutouts.keyboard,
      imageRotate: -8,
      className: 'desk:left-[5%] desk:top-[46px] desk:w-[12%]',
      deskWidth: 12,
      labelPosition: { left: '-2%', top: '98%' },
    },
    {
      key: 'postcard',
      href: post('summary-of-2022'),
      image: denCutouts.postcard,
      imageRotate: -5,
      className: 'desk:left-[31%] desk:top-[30px] desk:w-[15%]',
      deskWidth: 15,
      labelPosition: { left: '8%', top: '104%' },
      tape: { rotate: -8, top: -6 },
      preload: true,
    },
    {
      key: 'rcplane',
      href: localizedPath(locale, '/hobbies'),
      image: denCutouts.rcplane,
      imageRotate: 7,
      className: 'desk:left-[63%] desk:top-[26px] desk:w-[21%]',
      deskWidth: 21,
      labelPosition: { left: '18%', top: '100%' },
      preload: true,
      drift:
        'animate-drift [--drift-duration:9s] [--drift-r:-1.6deg] [--drift-y:-9px]',
    },
    {
      key: 'printer',
      href: PrintableURL,
      external: true,
      image: denCutouts.printer,
      className: 'desk:left-[4%] desk:top-[318px] desk:w-[11.5%]',
      deskWidth: 11.5,
      labelPosition: { left: '70%', top: '34%' },
      arrow: <HandArrow variant="left" className="hidden desk:block" />,
    },
    {
      key: 'drone',
      href: localizedPath(locale, '/hobbies'),
      image: denCutouts.drone,
      imageRotate: -9,
      className: 'desk:left-[82%] desk:top-[244px] desk:w-[14%]',
      deskWidth: 14,
      labelPosition: { left: '-6%', top: '102%' },
      drift:
        'animate-drift [--drift-duration:5.5s] [--drift-r:1.2deg] [--drift-delay:-2s] [--drift-y:-6px]',
    },
    {
      key: 'succulent',
      href: post('low-maintenance-succulent-plants-on-my-desk-setup'),
      image: denCutouts.succulent,
      // Hidden on small screens (as in the design) to keep the grid even.
      className:
        'hidden desk:block desk:left-[7%] desk:top-[770px] desk:w-[9%]',
      deskWidth: 9,
      labelPosition: { left: '-4%', top: '104%' },
    },
    {
      key: 'laptop',
      href: localizedPath(locale, '/project'),
      image: denCutouts.laptop,
      imageRotate: -4,
      className: 'desk:left-[22%] desk:top-[836px] desk:w-[19.5%]',
      deskWidth: 19.5,
      labelPosition: { left: '74%', top: '30%' },
      // Keep the tag above the sketchbook it runs into.
      labelClassName: 'desk:z-10',
    },
    {
      key: 'sketchbook',
      href: DrawingAlbumURL,
      external: true,
      image: denCutouts.sketchbook,
      imageRotate: 5,
      className: 'desk:left-[48.5%] desk:top-[868px] desk:w-[16.5%]',
      deskWidth: 16.5,
      labelPosition: { left: '26%', top: '-16%' },
    },
    {
      key: 'coffee',
      href: localizedPath(locale, '/about'),
      image: denCutouts.coffee,
      imageRotate: -6,
      className: 'desk:left-[69.5%] desk:top-[850px] desk:w-[10%]',
      deskWidth: 10,
      labelPosition: { left: '18%', top: '104%' },
    },
    {
      key: 'camera',
      href: YouTubeChannelURL,
      external: true,
      image: denCutouts.camera,
      imageRotate: 4,
      className:
        'hidden desk:block desk:left-[84.5%] desk:top-[700px] desk:w-[10.5%]',
      deskWidth: 10.5,
      labelPosition: { left: '-34%', top: '100%' },
    },
  ]

  const renderObject = (object: DeskObject, n: number) => {
    const copy = home.objects[object.key]
    const ariaLabel = object.external
      ? `${copy.ariaLabel} ${dict.den.common.opensInNewTab}`
      : copy.ariaLabel
    const sizes = `(max-width: 960px) 33vw, ${Math.round(object.deskWidth * 14.4)}px`
    // Set down one after another once the headline is up, tilting
    // alternately left and right.
    const place = {
      className: 'animate-place',
      style: {
        '--stagger': n + 3,
        '--tilt': n % 2 ? '5deg' : '-5deg',
      } as React.CSSProperties,
    }
    const cutout = (
      <CutoutObject
        href={object.href}
        external={object.external}
        image={object.image}
        ariaLabel={ariaLabel}
        n={n}
        label={copy.label}
        imageRotate={object.imageRotate}
        imageClassName={object.drift}
        labelPosition={object.labelPosition}
        labelClassName={object.labelClassName}
        arrow={object.arrow}
        sizes={sizes}
        preload={object.preload}
        className={
          object.tape
            ? undefined
            : cn('desk:absolute', object.className, place.className)
        }
        style={object.tape ? undefined : place.style}
      />
    )

    if (!object.tape)
      return <React.Fragment key={object.key}>{cutout}</React.Fragment>

    return (
      <div
        key={object.key}
        className={cn(
          'relative desk:absolute',
          object.className,
          place.className,
        )}
        style={place.style}>
        {cutout}
        <Tape rotate={object.tape.rotate} style={{ top: object.tape.top }} />
      </div>
    )
  }

  const [keyboard, postcard, rcplane, printer, drone, ...bottomRow] = objects

  return (
    <section
      aria-label={desk.ariaLabel}
      className="overflow-x-clip bg-grid-paper">
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-3 items-end gap-x-3 gap-y-7 px-4 pt-6 pb-10 desk:block desk:h-[1090px] desk:p-0">
        {renderObject(keyboard, 1)}

        {keyboardPost && (
          <Link
            href={post(keyboardPost.slug)}
            className="group hidden w-[196px] rotate-[1.5deg] animate-pop rounded px-4 pt-3.5 pb-4 text-sm leading-[1.35] float-card transition-[rotate,translate] duration-500 ease-spring [--stagger:6] hover:-translate-y-1 hover:rotate-0 desk:absolute desk:top-[70px] desk:left-[17%] desk:block">
            <span className="mb-1.5 block font-mono text-[11px] text-graphite">
              {fillTemplate(home.tip.meta, {
                date: formatPostDate(keyboardPost.date, locale),
              })}
            </span>
            <span className="block font-serif text-[21px] leading-[1.08]">
              {keyboardPost.title}
            </span>
            <span className="mt-2 block text-[13px] text-pen group-hover:underline">
              {home.tip.cta}
            </span>
          </Link>
        )}

        {renderObject(postcard, 2)}

        <LiveClockChip
          label={dict.den.common.liveClock.place}
          ariaLabel={dict.den.common.liveClock.ariaLabel}
          locale={locale}
          rotate={-2}
          className="hidden animate-pop [--stagger:7] desk:absolute desk:top-[96px] desk:left-[48.5%] desk:inline-flex"
        />

        {renderObject(rcplane, 3)}
        {renderObject(printer, 4)}
        {renderObject(drone, 5)}

        <TerminalCard
          title={dict.den.common.terminalTitle}
          lines={home.terminal.lines as TerminalLine[]}
          rotate={2}
          className="hidden animate-pop [--stagger:10] desk:absolute desk:top-[440px] desk:left-[75.5%] desk:block"
        />

        <div className="order-first col-span-full mb-5 flex flex-col items-center text-center desk:absolute desk:top-[196px] desk:left-1/2 desk:mb-0 desk:w-[min(660px,48%)] desk:-translate-x-1/2">
          <div className="mb-3.5 flex -rotate-3 animate-rise items-end gap-1.5 [--stagger:3] desk:-translate-x-10">
            <HandNote size={30}>{desk.note}</HandNote>
            <HandArrow
              variant="curl-down"
              className="animate-draw-in"
              style={{ '--stagger': 9 } as React.CSSProperties}
            />
          </div>
          <Kicker className="mb-[26px] animate-rise">{desk.kicker}</Kicker>
          <h1 className="animate-rise font-serif text-[length:min(96px,24vw)] leading-[0.84] font-normal tracking-[-0.025em] [--stagger:1] desk:text-[length:clamp(124px,12vw,172px)]">
            <RichText text={desk.title} emClassName="tracking-[-0.03em]" />
          </h1>
          <p className="mt-[34px] max-w-[520px] animate-rise text-[17px] leading-normal text-pretty [--stagger:2] desk:text-[19px]">
            <RichText text={desk.lede} />
          </p>
          <p className="mt-[30px] flex animate-rise flex-wrap items-center justify-center gap-2.5 text-sm text-graphite [--stagger:4]">
            <span className="inline-flex h-[26px] items-center rounded-full border border-ink px-3 text-[13px] text-ink">
              {desk.hintPill}
            </span>
            {desk.hint}
          </p>
        </div>

        {bottomRow.map((object, i) => renderObject(object, i + 6))}
      </div>
    </section>
  )
}
