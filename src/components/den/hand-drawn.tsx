import React from 'react'

import { cn } from '@/components/ui/utils'

const RINGS = {
  // Loose loop around a nav item / pill (drawn in a 120×40 box).
  pill: {
    viewBox: '0 0 120 40',
    d: 'M10 24 C 8 9, 60 3, 104 8 C 120 11, 118 31, 92 35 C 60 40, 14 37, 8 25 C 5 18, 22 9, 44 7',
    strokeWidth: 1.6,
  },
  // Wider ellipse around a word ("attach to nothing").
  oval: {
    viewBox: '0 0 300 120',
    d: 'M30 70 C 24 30, 150 8, 262 24 C 300 30, 300 92, 230 104 C 150 118, 40 110, 22 76 C 12 56, 60 30, 120 22',
    strokeWidth: 2,
  },
} as const

export type HandRingVariant = keyof typeof RINGS

/**
 * Just the hand-drawn ring SVG (pen blue, non-scaling stroke). Position it
 * yourself with `className`, e.g. `absolute -left-1 top-0.5 h-10 w-[calc(100%+8px)]`.
 */
export function HandRingSvg({
  variant = 'oval',
  className,
  strokeWidth,
  animated,
}: {
  variant?: HandRingVariant
  className?: string
  strokeWidth?: number
  /** Fade/scale the ring in once (respects reduced motion). */
  animated?: boolean
}) {
  const ring = RINGS[variant]
  // A stroke-dash "draw" doesn't work here: Chrome ignores pathLength with
  // vector-effect="non-scaling-stroke", so the ring fades in instead.
  return (
    <svg
      aria-hidden="true"
      viewBox={ring.viewBox}
      preserveAspectRatio="none"
      className={cn(
        'pointer-events-none overflow-visible',
        animated && 'animate-in duration-500 fade-in-0 zoom-in-90',
        className,
      )}>
      <path
        d={ring.d}
        fill="none"
        stroke="var(--color-pen)"
        strokeWidth={strokeWidth ?? ring.strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/**
 * Wrap inline content in a hand-drawn ballpoint ring. The ring overhangs the
 * content slightly (~6%) and never captures clicks.
 */
export function HandRing({
  children,
  variant = 'oval',
  as: Tag = 'span',
  className,
  ringClassName,
  strokeWidth,
  animated,
}: {
  children: React.ReactNode
  variant?: HandRingVariant
  as?: 'span' | 'em' | 'div'
  className?: string
  /** Override the ring box (defaults to -6%/-4% inset, 112% size). */
  ringClassName?: string
  strokeWidth?: number
  animated?: boolean
}) {
  return (
    <Tag className={cn('relative inline-block', className)}>
      {children}
      <HandRingSvg
        variant={variant}
        strokeWidth={strokeWidth}
        animated={animated}
        className={cn(
          'absolute',
          ringClassName ?? '-top-[4%] -left-[6%] h-[112%] w-[112%]',
        )}
      />
    </Tag>
  )
}

/** Wavy ballpoint underline under inline text (keeps the phrase unbroken). */
export function Squiggle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={cn('relative whitespace-nowrap', className)}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-[9px] left-0 h-3 w-full">
        <path
          d="M2 7 C 20 2, 30 11, 50 6 S 80 2, 100 7 S 140 11, 160 6 S 190 3, 198 6"
          fill="none"
          stroke="var(--color-pen)"
          strokeWidth={1.6}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  )
}

const ARROWS = {
  // Curls down and to the right (hero "psst — this is my desk").
  'curl-down': {
    width: 40,
    height: 40,
    d: 'M4 6 C 22 4, 32 14, 30 34 M30 34 L23 27 M30 34 L35 26',
  },
  // Wider curl down-right (style-kit margin note).
  'curl-down-wide': {
    width: 56,
    height: 40,
    d: 'M4 8 C 24 4, 44 14, 46 34 M46 34 L38 27 M46 34 L52 25',
  },
  // Points left (printer label "← Ender 3 V2").
  left: {
    width: 44,
    height: 22,
    d: 'M42 12 C 30 4, 16 4, 4 12 M4 12 L12 6 M4 12 L12 17',
  },
} as const

/** Hand-drawn ballpoint arrow. */
export function HandArrow({
  variant = 'curl-down',
  className,
  width,
  height,
}: {
  variant?: keyof typeof ARROWS
  className?: string
  width?: number
  height?: number
}) {
  const arrow = ARROWS[variant]
  return (
    <svg
      aria-hidden="true"
      width={width ?? arrow.width}
      height={height ?? arrow.height}
      viewBox={`0 0 ${arrow.width} ${arrow.height}`}
      className={cn('flex-none', className)}>
      <path
        d={arrow.d}
        fill="none"
        stroke="var(--color-pen)"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Small ↗ arrow used in pill buttons and external links. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={cn('flex-none', className)}>
      <path
        d="M2 10 L10 2 M4 2 H10 V8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}
