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
    <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl">
      <Image
        className={clsx(
          'absolute inset-0 aspect-video rounded-xl bg-card object-cover',
          'ring-1 ring-muted',
          'scale-100 transition-all duration-200 ease-in-out hover:scale-110',
        )}
        src={src}
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
        alt={alt}
        loading="lazy"
        {...props}
      />
      <div
        className={clsx(
          'absolute inset-0 z-10',
          'bg-black/30',
          'pointer-events-none',
        )}></div>
    </div>
  )
}
