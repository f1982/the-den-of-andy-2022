import React from 'react'

import { cn } from '@/components/ui/utils'

type WithClassName = { className?: string; style?: React.CSSProperties }

/** Inventory numeral in a thin circle: ①. Inherits the text colour. */
export function CircledNumber({
  n,
  className,
  style,
}: WithClassName & { n: number | string }) {
  return (
    <span className={cn('circled-num', className)} style={style}>
      {n}
    </span>
  )
}

/** Mono, uppercase, graphite label: "§ 01 — inside the den". */
export function Kicker({
  children,
  as: Tag = 'p',
  tone = 'graphite',
  className,
  style,
}: WithClassName & {
  children: React.ReactNode
  as?: 'p' | 'span' | 'div' | 'h2' | 'h3'
  tone?: 'graphite' | 'ink'
}) {
  return (
    <Tag
      className={cn(
        'font-mono text-xs tracking-[0.08em] uppercase',
        tone === 'ink' ? 'text-ink' : 'text-graphite',
        className,
      )}
      style={style}>
      {children}
    </Tag>
  )
}

export type HandNoteProps = WithClassName & {
  children: React.ReactNode
  as?: 'span' | 'p' | 'div'
  /** Degrees; negative tilts up to the right like a quick margin note. */
  rotate?: number
  /** Font size in px (the design uses 20–30px). Default 24. */
  size?: number
  /** Write in ink instead of ballpoint blue (e.g. polaroid captions). */
  ink?: boolean
}

/**
 * Handwritten ballpoint note (Caveat, pen blue). `\n` in the text becomes a
 * line break.
 */
export function HandNote({
  children,
  as: Tag = 'span',
  rotate,
  size = 24,
  ink,
  className,
  style,
}: HandNoteProps) {
  return (
    <Tag
      className={cn(
        'font-hand leading-[1.05] font-medium whitespace-pre-line',
        ink ? 'text-ink' : 'text-pen',
        Tag === 'span' && 'inline-block',
        className,
      )}
      style={{
        fontSize: size,
        rotate: rotate ? `${rotate}deg` : undefined,
        ...style,
      }}>
      {children}
    </Tag>
  )
}

/** One highlighter swipe behind inline text. Max one per section. */
export function Highlight({
  children,
  className,
  style,
}: WithClassName & { children: React.ReactNode }) {
  return (
    <span className={cn('hl', className)} style={style}>
      {children}
    </span>
  )
}

/**
 * Masking-tape strip. By default it sits centred on the top edge of the
 * nearest positioned ancestor; override with `className`/`style`.
 */
export function Tape({
  rotate,
  width,
  height,
  className,
  style,
}: WithClassName & { rotate?: number; width?: number; height?: number }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'tape absolute -top-[15px] left-1/2 -translate-x-1/2',
        className,
      )}
      style={{
        width,
        height,
        rotate: rotate ? `${rotate}deg` : undefined,
        ...style,
      }}
    />
  )
}

const pinColors = {
  pen: 'bg-pen',
  highlighter: 'bg-highlighter',
  ink: 'bg-ink',
} as const

/** Push pin centred on the top edge of the nearest positioned ancestor. */
export function Pin({
  color = 'pen',
  className,
  style,
}: WithClassName & { color?: keyof typeof pinColors }) {
  return (
    <span
      aria-hidden="true"
      className={cn('pin', pinColors[color], className)}
      style={style}
    />
  )
}

/** Printed barcode stripes. Default height 40px. */
export function Barcode({ className, style }: WithClassName) {
  return (
    <span
      aria-hidden="true"
      className={cn('block h-10 barcode', className)}
      style={style}
    />
  )
}
