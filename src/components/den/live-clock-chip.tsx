'use client'

import React, { useCallback, useSyncExternalStore } from 'react'

import { cn } from '@/components/ui/utils'

const TIME_ZONE = 'Pacific/Auckland'
const formatters = new Map<string, Intl.DateTimeFormat>()

function formatAucklandTime(locale: string) {
  let formatter = formatters.get(locale)
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(locale, {
      timeZone: TIME_ZONE,
      hour: 'numeric',
      minute: '2-digit',
      hour12: !locale.startsWith('zh'),
    })
    formatters.set(locale, formatter)
  }
  return formatter.format(new Date())
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000)
  return () => window.clearInterval(id)
}

// Nothing time-dependent is rendered on the server, so the prerendered HTML
// stays static; the real time appears right after hydration.
const getServerSnapshot = () => null

/**
 * Floating chip with a red "live" dot and the current time in Auckland,
 * e.g. "Auckland · 10:42 pm".
 */
export function LiveClockChip({
  label,
  locale = 'en',
  ariaLabel,
  rotate,
  className,
  style,
}: {
  /** Place name, e.g. dict.den.common.liveClock.place. */
  label: string
  /** Page locale ('en' | 'zh-CN'); picks the time format. */
  locale?: string
  ariaLabel?: string
  rotate?: number
  className?: string
  style?: React.CSSProperties
}) {
  const intlLocale = locale.startsWith('zh') ? 'zh-CN' : 'en-NZ'
  const getSnapshot = useCallback(
    () => formatAucklandTime(intlLocale),
    [intlLocale],
  )
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (
    <p
      aria-label={ariaLabel}
      className={cn(
        'inline-flex h-[34px] items-center gap-2 rounded-full px-3.5 font-mono text-xs whitespace-nowrap float-card',
        className,
      )}
      style={{ rotate: rotate ? `${rotate}deg` : undefined, ...style }}>
      <i
        aria-hidden="true"
        className="size-[7px] flex-none rounded-full bg-signal shadow-[0_0_0_4px_rgba(226,70,43,0.15)]"
      />
      <span>
        {label} · <time className="tabular-nums">{time ?? '--:--'}</time>
      </span>
    </p>
  )
}
