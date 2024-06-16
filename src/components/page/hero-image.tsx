import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface PageHeroProps {
  image: string | StaticImport
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
        className={clsx(
          'aspect-square h-auto w-full object-contain md:aspect-video',
          className,
        )}
        alt=""
        width={800}
        height={600}
      />
    </div>
  )
}

export default PageHero
