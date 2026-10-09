import React from 'react'

import { Kicker, PillLink, RichText, Ticket } from '@/components/den'

import { denSocialLinks } from '@/config/links'

const VIDEO_PLATFORMS = ['youtube', 'bilibili', 'instagram'] as const

/** "ADMIT ONE" ticket pointing at the video channels. */
export function NotebookTicket({
  labels,
}: {
  labels: {
    stub: string
    kicker: string
    title: string
    serial: string
    seat: string
    place: string
    opensInNewTab: string
  }
}) {
  const links = VIDEO_PLATFORMS.map((id) =>
    denSocialLinks.find((link) => link.id === id),
  ).filter((link) => link !== undefined)

  return (
    <Ticket
      stub={labels.stub}
      ariaLabel={labels.kicker}
      meta={[labels.serial, labels.seat, labels.place]}
      className="mt-[100px] desk:mt-[150px]">
      <Kicker>{labels.kicker}</Kicker>
      <h2 className="font-serif text-[38px] leading-[0.98] font-normal tracking-[-0.01em] text-balance desk:text-[54px]">
        <RichText text={labels.title} />
      </h2>
      <div className="mt-1.5 flex flex-wrap gap-2.5">
        {links.map((link, i) => (
          <PillLink
            key={link.id}
            href={link.href}
            variant={i === 0 ? 'ink' : 'line'}
            external
            arrow
            ariaLabel={`${link.label} ${labels.opensInNewTab}`}>
            {link.label}
          </PillLink>
        ))}
      </div>
    </Ticket>
  )
}
