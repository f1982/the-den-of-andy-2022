import clsx from 'clsx'
import Image from 'next/image'
import React, { PropsWithChildren } from 'react'

interface PageHeroProps {
  image: string
  className?: string
}

const PageHero: React.FC<PropsWithChildren<PageHeroProps>> = ({
  image,
  className,
}) => {
  return (
    <div
      className={clsx(
        'container flex flex-col items-center justify-center',
        className,
      )}>
      <Image
        src={image}
        className="aspect-square h-auto w-full object-contain md:aspect-video"
        alt=""
        width={800}
        height={600}
      />
    </div>
  )
}

export default PageHero
