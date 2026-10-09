import React from 'react'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/components/ui/utils'

import { CircledNumber, HandNote } from './marks'

/** A transparent cut-out photo with the soft double drop shadow. */
export function CutoutImage({
  src,
  alt = '',
  rotate,
  small,
  sizes = '(max-width: 960px) 33vw, 240px',
  preload,
  className,
  style,
}: {
  src: StaticImageData
  /** Empty (decorative) by default. */
  alt?: string
  rotate?: number
  /** Use the lighter shadow (thumbnails, card images). */
  small?: boolean
  sizes?: string
  preload?: boolean
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      preload={preload}
      className={cn(
        'block h-auto w-full',
        small ? 'cutout-sm' : 'cutout',
        className,
      )}
      style={{ rotate: rotate ? `${rotate}deg` : undefined, ...style }}
    />
  )
}

export type CutoutObjectProps = {
  href: string
  /** Opens in a new tab with rel="noopener noreferrer". */
  external?: boolean
  image: StaticImageData
  /** Accessible name of the link, e.g. 'RC plane — RC hobby'. */
  ariaLabel: string
  /** Inventory numeral shown in the tag. */
  n: number
  /** Handwritten tag text (`\n` breaks the line). */
  label: React.ReactNode
  /** Tilt of the photo in degrees. */
  imageRotate?: number
  imageClassName?: string
  /**
   * Root classes. On the desk stage pass the absolute placement for wide
   * screens only, e.g. 'desk:absolute desk:left-[5%] desk:top-[46px] desk:w-[12%]'.
   */
  className?: string
  style?: React.CSSProperties
  /**
   * Where the tag sits relative to the object on wide screens (it is static,
   * below the photo, under 960px), e.g. { left: '62%', top: '96%' }.
   */
  labelPosition?: { left?: string; top?: string; right?: string }
  labelClassName?: string
  /** Hand-written tag size in px. Default 23. */
  labelSize?: number
  /** Something before the numeral, e.g. <HandArrow variant="left" />. */
  arrow?: React.ReactNode
  sizes?: string
  preload?: boolean
}

/**
 * A clickable object on the desk: cut-out photo + ① + handwritten tag,
 * rendered as a link.
 */
export function CutoutObject({
  href,
  external,
  image,
  ariaLabel,
  n,
  label,
  imageRotate,
  imageClassName,
  className,
  style,
  labelPosition,
  labelClassName,
  labelSize = 23,
  arrow,
  sizes,
  preload,
}: CutoutObjectProps) {
  const content = (
    <>
      <CutoutImage
        src={image}
        rotate={imageRotate}
        sizes={sizes}
        preload={preload}
        className={cn(
          'transition-transform duration-500 ease-spring group-hover:-translate-y-2 group-hover:scale-[1.025]',
          imageClassName,
        )}
      />
      <span
        className={cn(
          'mt-1.5 flex items-center gap-[7px] text-[13px] text-ink desk:absolute desk:mt-0 desk:whitespace-nowrap',
          labelClassName,
        )}
        style={labelPosition}>
        {arrow}
        <CircledNumber n={n} />
        <HandNote
          size={labelSize}
          className="group-hover:text-ink desk:whitespace-pre">
          {label}
        </HandNote>
      </span>
    </>
  )

  const rootClassName = cn(
    'group relative block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pen',
    className,
  )

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={rootClassName}
      style={style}>
      {content}
    </a>
  ) : (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={rootClassName}
      style={style}>
      {content}
    </Link>
  )
}
