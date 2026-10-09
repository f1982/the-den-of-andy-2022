import React from 'react'

import {
  CutoutImage,
  HandNote,
  Kicker,
  RichText,
  denCutouts,
} from '@/components/den'

/** Grid-paper hero: "The / Notebook", sketchbook, Field notes label, coffee. */
export function NotebookHero({
  kicker,
  title,
  lede,
  note,
  sketchbookAlt,
  labelSmall,
  labelBig,
  fuel,
}: {
  kicker: string
  title: string
  lede: string
  note: string
  sketchbookAlt: string
  labelSmall: string
  labelBig: string
  fuel: string
}) {
  return (
    <section className="overflow-hidden bg-grid-paper">
      <div className="relative mx-auto max-w-[1440px] px-4 pt-10 pb-[60px] desk:h-[700px] desk:p-0">
        <div className="flex flex-col gap-[26px] desk:absolute desk:top-[90px] desk:left-[7%] desk:w-[640px]">
          <Kicker>{kicker}</Kicker>
          <h1 className="font-serif text-[104px] leading-[0.82] font-normal tracking-[-0.03em] desk:text-[clamp(140px,12.8vw,184px)]">
            <RichText text={title} />
          </h1>
          <p className="max-w-[470px] text-[19px] leading-normal text-pretty">
            <RichText text={lede} />
          </p>
          <HandNote as="p" size={27} rotate={-2} className="origin-left">
            {note}
          </HandNote>
        </div>

        <div className="relative mx-auto mt-[30px] w-[90%] desk:absolute desk:top-[120px] desk:left-[55%] desk:mt-0 desk:w-[38%]">
          <CutoutImage
            src={denCutouts.sketchbook}
            alt={sketchbookAlt}
            rotate={-7}
            preload
            sizes="(max-width: 960px) 90vw, min(38vw, 548px)"
          />
        </div>

        <p
          className="absolute top-[86px] left-[84%] hidden rotate-6 px-4 py-3 font-mono text-[11px] leading-[1.6] tracking-[0.06em] uppercase float-card desk:block"
          aria-hidden="true">
          {labelSmall}
          <b className="mt-1 block font-serif text-[34px] leading-none font-normal tracking-normal normal-case">
            {labelBig}
          </b>
        </p>

        <div
          aria-hidden="true"
          className="absolute top-[470px] left-1/2 hidden w-[150px] desk:block">
          <CutoutImage src={denCutouts.coffee} rotate={-8} sizes="150px" />
        </div>
        <HandNote
          size={24}
          rotate={-4}
          className="absolute top-[610px] left-[61%] hidden desk:inline-block"
          style={{ whiteSpace: 'nowrap' }}>
          <span aria-hidden="true">{fuel}</span>
        </HandNote>
      </div>
    </section>
  )
}
