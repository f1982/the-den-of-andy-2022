import React from 'react'

import Image from 'next/image'

import { cn } from '@/components/ui/utils'

import { NotebookVisual } from '../notebook-data'

/**
 * A post's picture filling a sized, positioned box: a photo (object-cover) or
 * a cut-out centred on its coloured backdrop.
 */
export function NotebookVisualImage({
  visual,
  alt = '',
  sizes,
  cutoutWidth = '78%',
  preload,
  className,
}: {
  visual: NotebookVisual
  alt?: string
  sizes: string
  /** Width of a cut-out inside the box. */
  cutoutWidth?: string
  preload?: boolean
  /** Box classes: size, radius… */
  className?: string
}) {
  if (visual.kind === 'photo') {
    return (
      <span className={cn('relative block overflow-hidden', className)}>
        <Image
          src={visual.src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      </span>
    )
  }

  return (
    <span
      className={cn(
        'relative grid place-items-center overflow-hidden',
        className,
      )}
      style={{ background: visual.background }}>
      <Image
        src={visual.src}
        alt={alt}
        sizes={sizes}
        preload={preload}
        className="block h-auto cutout-sm"
        style={{ width: cutoutWidth }}
      />
    </span>
  )
}
