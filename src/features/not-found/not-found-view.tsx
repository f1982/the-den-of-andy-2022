'use client'

import React, { useSyncExternalStore } from 'react'

import type en from '@/dictionaries/en.json'
import Link from 'next/link'

import { localizedPath } from '@/utils/locale-path'

import {
  CutoutImage,
  HandNote,
  Kicker,
  PillLink,
  RichText,
  denCutouts,
} from '@/components/den'

export type NotFoundCopy = (typeof en)['den']['notFound'] & { brand: string }

const subscribe = () => () => {}
const getSnapshot = () =>
  window.location.pathname.split('/')[1] === 'zh-CN' ? 'zh-CN' : 'en'
// not-found.tsx gets no params, so the prerendered 404 is English and the
// Chinese copy swaps in after hydration for /zh-CN/… paths.
const getServerSnapshot = () => 'en'

/** Playful Den 404: "4 [coffee] 4", "Nothing on this desk". */
export default function NotFoundView({
  copy,
}: {
  copy: Record<'en' | 'zh-CN', NotFoundCopy>
}) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const t = copy[locale]

  return (
    <div
      lang={locale}
      className="relative flex min-h-dvh flex-1 flex-col overflow-x-clip bg-grid-paper">
      <div className="page-wrap flex h-16 items-center">
        <Link
          href={localizedPath(locale, '/home')}
          className="inline-flex min-h-11 items-center font-serif text-[26px] leading-none">
          {t.brand}
        </Link>
      </div>

      <main className="m-auto flex flex-col items-center gap-6 px-4 pt-6 pb-24 text-center">
        <div className="relative">
          <p
            aria-hidden="true"
            className="flex items-center font-serif text-[120px] leading-none tracking-[-0.04em] desk:text-[200px]">
            4
            <span className="mx-1 inline-block w-[0.86em]">
              <CutoutImage
                src={denCutouts.coffee}
                rotate={-8}
                preload
                sizes="180px"
              />
            </span>
            4
          </p>
          <HandNote
            size={24}
            rotate={-5}
            className="mt-1 desk:absolute desk:top-6 desk:-right-48 desk:mt-0 desk:w-44 desk:text-left">
            {t.note}
          </HandNote>
        </div>
        <Kicker>{t.kicker}</Kicker>
        <h1 className="font-serif text-[56px] leading-[0.9] font-normal tracking-[-0.02em] text-balance desk:text-[96px]">
          <RichText text={t.title} />
        </h1>
        <p className="max-w-[46ch] text-[17px] leading-[1.6] text-pretty text-ink-soft">
          {t.lede}
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <PillLink href={localizedPath(locale, '/home')}>
            {t.home} <span aria-hidden="true">→</span>
          </PillLink>
          <PillLink href={localizedPath(locale, '/blog')} variant="line">
            {t.blog}
          </PillLink>
        </div>
      </main>
    </div>
  )
}
