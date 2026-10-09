import React from 'react'

import {
  CutoutImage,
  HandNote,
  HandRing,
  Kicker,
  denCutouts,
} from '@/components/den'

import { denSocialLinks } from '@/config/links'
import { contactEmail, contactMailto } from '@/config/site-config'

import { HomeDictionary } from './home-data'

/**
 * Render the motto: `\n` breaks the line and the `*italic*` word gets the
 * hand-drawn ring.
 */
function Motto({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {line.split(/(\*[^*]+\*)/g).map((part, j) =>
            part.length > 2 && part.startsWith('*') && part.endsWith('*') ? (
              <HandRing key={j} as="em">
                {part.slice(1, -1)}
              </HandRing>
            ) : (
              <React.Fragment key={j}>{part}</React.Fragment>
            ),
          )}
        </React.Fragment>
      ))}
    </>
  )
}

/** "The one rule of the den" motto + email and socials (Home only). */
export function MottoContactSection({ dict }: { dict: HomeDictionary }) {
  const contact = dict.den.home.contact

  return (
    <section
      id="contact"
      aria-labelledby="contact-motto"
      className="relative page-wrap scroll-mt-8 pt-32 pb-20 desk:pt-[170px] desk:pb-28">
      <span
        aria-hidden="true"
        className="absolute top-12 left-2 w-[72px] desk:top-[120px] desk:left-[1%] desk:w-[132px]">
        <CutoutImage
          src={denCutouts.shell}
          rotate={-14}
          small
          sizes="(max-width: 960px) 72px, 132px"
        />
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[150px] right-2 w-[60px] desk:top-[330px] desk:right-[2%] desk:w-[104px]">
        <CutoutImage
          src={denCutouts.filament}
          rotate={10}
          small
          sizes="(max-width: 960px) 60px, 104px"
        />
      </span>

      <Kicker className="mb-[30px] text-center">{contact.kicker}</Kicker>
      <p
        id="contact-motto"
        className="relative text-center font-serif text-[length:clamp(40px,11.5vw,64px)] leading-[0.9] tracking-[-0.025em] desk:text-[length:clamp(96px,9.2vw,132px)]">
        <Motto text={contact.motto} />
      </p>

      <div className="mt-20 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-10 border-y border-ink/90 pt-14 pb-12 desk:mt-[110px] desk:pt-[72px] desk:pb-16">
        <div className="flex flex-col items-start gap-[18px]">
          <Kicker>{contact.sayHello}</Kicker>
          <a
            href={contactMailto}
            className="inline-block border-b-2 border-ink pb-1 font-serif text-[32px] leading-none break-all hover:border-pen hover:text-pen desk:text-[54px]">
            {contactEmail}
          </a>
          <HandNote as="p" size={24}>
            {contact.emailNote}
          </HandNote>
        </div>
        <ul
          aria-label={dict.den.common.elsewhere}
          className="grid grid-cols-1 content-start gap-x-7 min-[420px]:grid-cols-2">
          {denSocialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-between gap-3 border-b border-ink/14 text-[15px] hover:text-pen">
                {link.label}
                <span className="font-mono text-xs text-graphite">
                  {link.handle && <span className="mr-1.5">{link.handle}</span>}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">
                    {' '}
                    {dict.den.common.opensInNewTab}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
