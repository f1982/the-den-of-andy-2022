import React from 'react'

import Image, { StaticImageData } from 'next/image'

import { cn } from '@/components/ui/utils'

import { HandNote, Tape } from './marks'

export type PolaroidProps = {
  src: StaticImageData | string
  alt: string
  /** Handwritten caption in the bottom margin of the print. */
  caption?: React.ReactNode
  /** Tape strip on the top edge: `true`, or tilt/width for it. */
  tape?: boolean | { rotate?: number; width?: number; height?: number }
  /** Tilt of the whole print in degrees. */
  rotate?: number
  /**
   * `cover` (default): a photo filling the frame (uses `fill`, so the photo
   * area needs a height — default 270px).
   * `contain`: a transparent cut-out centred on a coloured backdrop (set the
   * backdrop with `photoClassName`, e.g. `bg-[#DCE3C6]`).
   */
  fit?: 'cover' | 'contain'
  /** Classes for the photo area (height, background). */
  photoClassName?: string
  /** Classes for the <Image> (e.g. `w-[62%]` for a contained cut-out). */
  imageClassName?: string
  /** Required with `fit="contain"` and a string `src`. */
  width?: number
  height?: number
  sizes?: string
  preload?: boolean
  className?: string
  captionClassName?: string
  /** Extra things laid on the photo (e.g. a second cut-out). */
  children?: React.ReactNode
  as?: 'div' | 'figure' | 'span'
}

/** White print with a thick bottom margin, optional tape and caption. */
export function Polaroid({
  src,
  alt,
  caption,
  tape,
  rotate,
  fit = 'cover',
  photoClassName,
  imageClassName,
  width,
  height,
  sizes = '(max-width: 960px) 100vw, 420px',
  preload,
  className,
  captionClassName,
  children,
  as: Tag = 'div',
}: PolaroidProps) {
  const tapeProps = typeof tape === 'object' ? tape : {}

  return (
    <Tag
      className={cn('polaroid', className)}
      style={{ rotate: rotate ? `${rotate}deg` : undefined }}>
      {tape && <Tape {...tapeProps} />}
      <span
        className={cn(
          'relative grid h-[270px] place-items-center overflow-hidden',
          photoClassName,
        )}>
        {fit === 'cover' ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            preload={preload}
            className={cn('object-cover', imageClassName)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            preload={preload}
            className={cn('h-auto w-[62%] cutout-sm', imageClassName)}
          />
        )}
        {children}
      </span>
      {caption && (
        <HandNote
          ink
          size={24}
          className={cn('absolute bottom-[9px] left-4', captionClassName)}>
          {caption}
        </HandNote>
      )}
    </Tag>
  )
}
