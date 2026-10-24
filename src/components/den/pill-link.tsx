import React from 'react'

import Link from 'next/link'

import { cn } from '@/components/ui/utils'

import { ArrowUpRight } from './hand-drawn'

/**
 * Pill button as a link: `ink` (filled, turns pen blue on hover) or `line`
 * (outline). External links and mailto: open as plain <a>; `external` adds
 * target=_blank.
 */
export function PillLink({
  href,
  variant = 'ink',
  external,
  arrow,
  children,
  className,
  ariaLabel,
}: {
  href: string
  variant?: 'ink' | 'line'
  external?: boolean
  /** Append a small ↗ icon. */
  arrow?: boolean
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}) {
  const classes = cn(variant === 'ink' ? 'btn-ink' : 'btn-line', className)
  const inner = (
    <>
      {children}
      {arrow && <ArrowUpRight />}
    </>
  )

  if (external || /^(https?:|mailto:)/.test(href)) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {inner}
    </Link>
  )
}
