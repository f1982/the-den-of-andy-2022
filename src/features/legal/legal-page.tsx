import React from 'react'

import { getDictionary } from '@/utils/dictionaries'

import { HandNote, Kicker } from '@/components/den'

/**
 * Paper column for legal/support pages: mono kicker, then the document as
 * prose with a big Instrument Serif <h1> (the h1 comes from the content).
 */
export default async function LegalPage({
  locale,
  html,
  children,
}: {
  locale: string
  /** Pre-rendered Markdown (app legal pages). */
  html?: string
  /** JSX content (site privacy policy, terms). */
  children?: React.ReactNode
}) {
  const dict = await getDictionary(locale)
  const proseClassName = [
    'prose max-w-none prose-p:text-pretty',
    'prose-h1:mb-10 prose-h1:border-b prose-h1:border-dashed prose-h1:border-ink/30 prose-h1:pb-8 prose-h1:text-[52px] prose-h1:leading-[0.95] prose-h1:tracking-[-0.02em] desk:prose-h1:text-[76px]',
    'prose-h2:mt-14 prose-h2:text-[34px] prose-h2:leading-[1.05] desk:prose-h2:text-[40px]',
    'prose-h3:text-[24px]',
    'prose-a:[overflow-wrap:anywhere]',
  ].join(' ')

  return (
    <div className="overflow-x-clip bg-grid-paper">
      <div className="page-wrap pt-14 pb-24 desk:pt-20 desk:pb-32">
        <div className="mx-auto max-w-[70ch]">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <Kicker>{dict.den.legal.kicker}</Kicker>
            <HandNote size={22} rotate={-2}>
              {dict.den.legal.note}
            </HandNote>
          </div>
          <div className="paper-card px-5 py-10 desk:px-14 desk:py-14">
            {html !== undefined ? (
              <article
                className={proseClassName}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <article className={proseClassName}>{children}</article>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
