import React from 'react'

import { cn } from '@/components/ui/utils'

export type TerminalLine = { kind: 'cmd' | 'out'; text: string }

/** Small dark zsh window: `~ cmd` lines in highlighter, output in grey. */
export function TerminalCard({
  lines,
  title = 'andy — zsh',
  caret = true,
  rotate,
  className,
  style,
}: {
  lines: TerminalLine[]
  title?: string
  /** End with a blinking-style `~ ▮` prompt. */
  caret?: boolean
  rotate?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={cn(
        'w-[238px] overflow-hidden rounded-[10px] bg-ink text-[#edeae2] shadow-[0_26px_40px_-20px_rgba(28,20,8,0.55)]',
        className,
      )}
      style={{ rotate: rotate ? `${rotate}deg` : undefined, ...style }}>
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 bg-[#2a2926] px-3 py-[9px] font-mono text-[10.5px] text-[#9c978c]">
        <i className="size-[9px] rounded-full bg-[#55524b]" />
        <i className="size-[9px] rounded-full bg-[#55524b]" />
        <i className="size-[9px] rounded-full bg-[#55524b]" />
        <span className="ml-2">{title}</span>
      </div>
      <div className="px-3.5 pt-3 pb-3.5 font-mono text-xs leading-[1.75]">
        {lines.map((line, i) =>
          line.kind === 'cmd' ? (
            <p key={i}>
              <b className="font-medium text-highlighter">~</b> {line.text}
            </p>
          ) : (
            <p key={i} className="text-[#9c978c]">
              {line.text}
            </p>
          ),
        )}
        {caret && (
          <p aria-hidden="true">
            <b className="font-medium text-highlighter">~</b>{' '}
            <span className="inline-block h-[13px] w-[7px] bg-highlighter align-[-2px]" />
          </p>
        )}
      </div>
    </div>
  )
}
