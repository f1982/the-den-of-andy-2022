import Image from 'next/image'

import { Barcode, HandNote, RichText, avatarPixel } from '@/components/den'

import type { AboutCopy } from '../about-types'

/**
 * A lanyard hanging from the top of the hero: black strap with repeating
 * lime text, a metal clip and a tilted "RESIDENT" ID card.
 */
export function IdBadge({ copy }: { copy: AboutCopy['badge'] }) {
  return (
    <div className="flex animate-hang flex-col items-center desk:absolute desk:top-0 desk:left-[8%] desk:w-80">
      {/* Strap, clip and card hang together and sway from the top. */}
      <div className="flex animate-sway flex-col items-center">
        <div
          aria-hidden="true"
          className="flex h-[230px] w-[38px] justify-center overflow-hidden bg-ink shadow-[inset_6px_0_8px_-6px_rgba(255,255,255,0.18)]">
          <span className="pt-2.5 font-mono text-[10px] tracking-[0.3em] whitespace-nowrap text-highlighter [writing-mode:vertical-rl]">
            {copy.strap}
          </span>
        </div>
        <div
          aria-hidden="true"
          className="relative z-[2] -mt-1 h-[30px] w-[54px] rounded-[6px_6px_10px_10px] bg-[linear-gradient(180deg,#e9e7e2,#a9a69f_60%,#cfccc5)] shadow-[0_3px_5px_rgba(0,0,0,0.25)]"
        />
        <div className="-mt-2.5 w-[300px] origin-top -rotate-4 overflow-hidden rounded-[18px] bg-card shadow-[0_0_0_1px_rgba(28,27,25,0.08),0_50px_60px_-36px_rgba(40,30,10,0.6),0_10px_20px_-10px_rgba(40,30,10,0.25)]">
          <div className="flex items-center justify-between bg-ink px-[22px] pt-[22px] pb-[18px] text-paper">
            <span className="font-mono text-[11px] tracking-[0.18em] text-highlighter">
              {copy.role}
            </span>
            <span
              aria-hidden="true"
              className="h-[9px] w-14 rounded-full bg-paper opacity-90"
            />
          </div>
          <div className="flex flex-col gap-3.5 px-[22px] pt-[22px] pb-[18px]">
            <Image
              src={avatarPixel}
              alt={copy.avatarAlt}
              width={128}
              height={128}
              sizes="128px"
              className="block size-32 rounded-[10px] shadow-[0_0_0_4px_var(--color-card),0_0_0_5px_rgba(28,27,25,0.12)] [image-rendering:pixelated]"
            />
            <p className="font-serif text-[50px] leading-[0.9] tracking-[-0.02em]">
              <RichText text={copy.name} />
            </p>
            <p className="font-mono text-xs">{copy.job}</p>
            <div className="flex justify-between border-t border-dashed border-ink/25 pt-2.5 font-mono text-[11px] text-graphite">
              <span>{copy.place}</span>
              <span>{copy.pronunciation}</span>
            </div>
            <Barcode className="mt-1" />
          </div>
        </div>
      </div>
      <HandNote
        as="p"
        size={26}
        rotate={-3}
        className="mt-[26px] animate-rise [--stagger:8]">
        {copy.note}
      </HandNote>
    </div>
  )
}
