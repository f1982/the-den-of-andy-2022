import clsx from 'clsx'
import Image from 'next/image'

export default function HoverScaleImage({
  src,
  alt,
  ...props
}: {
  src: string
  alt: string
}) {
  return (
    <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl">
      <Image
        className={clsx(
          'absolute inset-0 aspect-video h-auto w-full rounded-xl bg-card object-cover',
          'ring-1 ring-muted',
          'scale-100 transition-all duration-300 ease-in-out group-hover:scale-125',
        )}
        src={src}
        width={0}
        height={0}
        alt={alt}
        loading="lazy"
        {...props}
      />
      <div className={clsx('absolute inset-0', 'bg-black/30')}></div>
    </div>
  )
}
