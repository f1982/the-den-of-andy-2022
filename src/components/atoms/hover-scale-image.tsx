import clsx from 'clsx'
import Image from 'next/image'

export default function HoverScaleImage({
  src,
  width = 600,
  height = 400,
  alt,
  ...props
}: {
  src: string
  width?: number
  height?: number
  alt: string
}) {
  return (
    <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl">
      <Image
        className={clsx(
          'absolute inset-0 aspect-video rounded-xl object-cover',
          'ring-1 ring-muted',
          'scale-100 transition-all duration-200 ease-in-out hover:scale-110',
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        {...props}
      />
      <div
        className={clsx(
          'absolute inset-0 z-10',
          'bg-primary/20',
          'pointer-events-none',
        )}></div>
    </div>
  )
}
