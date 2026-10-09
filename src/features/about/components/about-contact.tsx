import React from 'react'

import { HandNote, Kicker, RichText } from '@/components/den'
import { cn } from '@/components/ui/utils'

import { type DenSocialLink, denSocialLinks } from '@/config/links'
import { contactEmail, contactMailto } from '@/config/site-config'

import type { AboutCopy } from '../about-types'

/** Thin 16px line icons for the social links. */
function SocialIcon({ id }: { id: DenSocialLink['id'] }) {
  const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.3,
  } as const
  const shapes: Record<DenSocialLink['id'], React.ReactNode> = {
    twitter: <path d="M2 2 L14 14 M14 2 L2 14" {...stroke} strokeWidth={1.4} />,
    youtube: (
      <>
        <rect x="1.5" y="3.5" width="13" height="9" rx="2.5" {...stroke} />
        <path d="M7 6 L10 8 L7 10 Z" fill="currentColor" />
      </>
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="12" height="12" rx="3.5" {...stroke} />
        <circle cx="8" cy="8" r="2.6" {...stroke} />
      </>
    ),
    bilibili: (
      <>
        <rect x="1.5" y="4" width="13" height="9.5" rx="2.5" {...stroke} />
        <path d="M5 1.5 L7 4 M11 1.5 L9 4" {...stroke} />
      </>
    ),
    printables: <path d="M3 13 L3 6 L8 3 L13 6 L13 13 Z" {...stroke} />,
    thingiverse: <path d="M2 3 H14 M8 3 V14" {...stroke} strokeWidth={1.4} />,
  }

  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="flex-none">
      {shapes[id]}
    </svg>
  )
}

// Indents for the stacked headline lines ("Want to / start / a new / project?").
const LINE_INDENT = ['', 'pl-[0.17em]', '', 'pl-[0.3em]']

/**
 * "Want to start a new project?" — big serif headline with italic letter
 * swaps, the email address and social links, on a slightly darker band.
 */
export function AboutContact({
  copy,
  opensInNewTab,
  compactTitle,
}: {
  copy: AboutCopy['contact']
  opensInNewTab: string
  /** Smaller headline for CJK copy (each glyph is a full em wide). */
  compactTitle?: boolean
}) {
  const titleLines = copy.title.split('\n')

  return (
    <section
      id="contact"
      aria-labelledby="about-contact-title"
      className="relative mt-[120px] overflow-hidden bg-secondary pt-20 pb-20 desk:mt-[190px] desk:pt-[120px] desk:pb-[120px]">
      <span
        aria-hidden="true"
        className="absolute top-[330px] left-[41%] hidden size-[88px] animate-parallax rounded-full border border-ink [--parallax:36px] desk:block"
      />
      <span
        aria-hidden="true"
        className="absolute top-10 right-[4%] hidden size-[120px] animate-parallax rounded-full border border-ink [--parallax:-24px] desk:block"
      />
      <span
        aria-hidden="true"
        className="absolute top-[190px] right-[12%] hidden size-[22px] animate-parallax rounded-full bg-highlighter [--parallax:56px] desk:block"
      />

      <div className="relative page-wrap">
        <div className="grid items-start gap-16 desk:grid-cols-2">
          <div className="animate-reveal">
            <h2
              id="about-contact-title"
              className={cn(
                'font-serif text-[84px] leading-[0.84] font-normal tracking-[-0.035em]',
                compactTitle ? 'desk:text-[120px]' : 'desk:text-[150px]',
              )}>
              {titleLines.map((line, i) => (
                <span
                  key={i}
                  className={cn('block', LINE_INDENT[i % LINE_INDENT.length])}>
                  <RichText text={line} emClassName="tracking-[-0.02em]" />
                </span>
              ))}
            </h2>
            <p className="mt-7 ml-[0.5em] font-serif text-[30px] desk:ml-[210px]">
              <RichText text={copy.orHello} />
            </p>
          </div>

          <div className="flex animate-reveal flex-col gap-11 [--stagger:1] desk:pt-[30px]">
            <div className="flex flex-col gap-3.5">
              <Kicker>{copy.email}</Kicker>
              <a
                href={contactMailto}
                className="block border-b-2 border-ink pb-1.5 font-serif text-[28px] leading-none break-all transition-colors hover:text-pen desk:text-[46px]">
                {contactEmail}
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <Kicker as="h3">{copy.elsewhere}</Kicker>
              <ul className="grid grid-cols-2 gap-x-7">
                {denSocialLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 items-center gap-3 border-b border-ink/14 text-[15px] transition-colors hover:text-pen">
                      <SocialIcon id={item.id} />
                      {item.label}
                      <span className="sr-only"> {opensInNewTab}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <HandNote as="p" size={26} rotate={-2}>
              {copy.note}
            </HandNote>
          </div>
        </div>
      </div>
    </section>
  )
}
