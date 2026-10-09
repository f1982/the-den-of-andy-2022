import React from 'react'

import {
  CutoutImage,
  HandNote,
  Kicker,
  RichText,
  Tape,
  TerminalCard,
  type TerminalLine,
  denCutouts,
} from '@/components/den'
import { cn } from '@/components/ui/utils'

import type { AboutCopy } from '../about-types'

function ChapterText({
  kicker,
  title,
  body,
  className,
}: {
  kicker: string
  title: string
  body: string
  className?: string
}) {
  return (
    <div className={cn('flex animate-reveal flex-col gap-[22px]', className)}>
      <Kicker>{kicker}</Kicker>
      <h2 className="font-serif text-[60px] leading-[0.9] font-normal tracking-[-0.02em] desk:text-[96px]">
        <RichText text={title} />
      </h2>
      <p className="max-w-[560px] text-lg leading-[1.65] text-pretty text-[#34322d]">
        {body}
      </p>
    </div>
  )
}

function Chapter({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid items-center gap-10 pt-[100px] desk:grid-cols-2 desk:gap-20 desk:pt-[170px]">
      {children}
    </section>
  )
}

/** 01 — Who's Andy: postcard, paua shell and a flat white. */
export function WhoChapter({ copy }: { copy: AboutCopy['who'] }) {
  return (
    <Chapter>
      <ChapterText kicker={copy.kicker} title={copy.title} body={copy.body} />
      <div className="relative h-[360px] desk:h-[480px]">
        <div className="absolute top-[8%] left-[6%] w-[62%] -rotate-5 animate-reveal">
          <Tape rotate={4} />
          <CutoutImage
            src={denCutouts.postcard}
            alt={copy.postcardAlt}
            sizes="(max-width: 960px) 62vw, 360px"
          />
        </div>
        <CutoutImage
          src={denCutouts.shell}
          rotate={18}
          sizes="(max-width: 960px) 36vw, 210px"
          className="absolute top-[48%] right-[2%] w-[36%] animate-parallax [--parallax:40px]"
        />
        <CutoutImage
          src={denCutouts.coffee}
          rotate={-6}
          sizes="(max-width: 960px) 26vw, 150px"
          className="absolute top-[62.5%] left-[14%] w-[26%] animate-parallax [--parallax:22px]"
        />
        <HandNote
          size={26}
          rotate={-4}
          className="absolute top-[14.5%] left-[66%]">
          {copy.noteHome}
        </HandNote>
        <HandNote
          size={24}
          rotate={3}
          className="absolute top-[83%] left-[44%]">
          {copy.noteDesk}
        </HandNote>
      </div>
    </Chapter>
  )
}

const STICKER_STYLES = {
  ink: 'bg-ink text-paper',
  paper:
    'bg-card shadow-[inset_0_0_0_1px_rgba(28,27,25,0.18),0_10px_18px_-12px_rgba(40,30,10,0.5)]',
  lime: 'bg-highlighter',
  pen: 'bg-transparent text-pen shadow-[inset_0_0_0_1.5px_var(--color-pen)]',
} as const

const STICKERS: {
  key: keyof AboutCopy['what']['stickers']
  tone: keyof typeof STICKER_STYLES
  rotate: number
}[] = [
  { key: 'javascript', tone: 'ink', rotate: -3 },
  { key: 'typescript', tone: 'paper', rotate: 2 },
  { key: 'react', tone: 'lime', rotate: -1 },
  { key: 'reactNative', tone: 'paper', rotate: 3 },
  { key: 'nextjs', tone: 'ink', rotate: -2 },
  { key: 'cssHtml', tone: 'pen', rotate: 1 },
  { key: 'ios', tone: 'paper', rotate: -4 },
  { key: 'cocos', tone: 'paper', rotate: 2 },
  { key: 'flash', tone: 'paper', rotate: -2 },
]

/** 02 — What I do: tech stickers and a little terminal. */
export function WhatChapter({
  copy,
  terminalTitle,
}: {
  copy: AboutCopy['what']
  terminalTitle: string
}) {
  return (
    <Chapter>
      <ChapterText
        kicker={copy.kicker}
        title={copy.title}
        body={copy.body}
        className="desk:order-2"
      />
      <div className="flex flex-col justify-center gap-7 desk:order-1 desk:h-[480px]">
        <ul className="flex max-w-[520px] animate-reveal flex-wrap items-center gap-x-3 gap-y-3.5">
          {STICKERS.map(({ key, tone, rotate }) => {
            const isFlash = key === 'flash'
            return (
              <li
                key={key}
                className={cn(
                  'inline-flex h-[46px] items-center rounded-full px-5 text-[17px] shadow-[0_10px_18px_-12px_rgba(40,30,10,0.5)] transition-[scale,translate] duration-500 ease-spring hover:-translate-y-0.5 hover:scale-[1.06]',
                  STICKER_STYLES[tone],
                  isFlash && 'text-graphite',
                )}
                style={{ rotate: `${rotate}deg` }}>
                {isFlash ? <s>{copy.stickers[key]}</s> : copy.stickers[key]}
              </li>
            )
          })}
          <li className="list-none">
            <HandNote size={24} rotate={-6}>
              {copy.flashNote}
            </HandNote>
          </li>
        </ul>
        <TerminalCard
          title={terminalTitle}
          lines={copy.terminal.lines as TerminalLine[]}
          caret={false}
          rotate={1.5}
          className="w-[300px] max-w-full animate-reveal [--stagger:1] desk:ml-10"
        />
      </div>
    </Chapter>
  )
}

/** 03 — Family: Zoe's crayon drawing. */
export function FamilyChapter({
  copy,
  zoeAge,
}: {
  copy: AboutCopy['family']
  zoeAge: number
}) {
  return (
    <Chapter>
      <ChapterText
        kicker={copy.kicker}
        title={copy.title}
        body={copy.body.replace('$AGE_OF_ZOE$', String(zoeAge))}
      />
      <div className="relative h-[360px] desk:h-[480px]">
        <div className="absolute top-[4%] left-[14%] w-[66%] rotate-3 animate-reveal">
          <CutoutImage
            src={denCutouts.crayon}
            alt={copy.crayonAlt}
            sizes="(max-width: 960px) 66vw, 380px"
          />
        </div>
        <HandNote size={26} rotate={-4} className="absolute top-[83%] left-0">
          {copy.note}
        </HandNote>
      </div>
    </Chapter>
  )
}
