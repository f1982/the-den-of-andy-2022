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
      className={clsx('flex flex-col items-center justify-center', className)}>
      <Image
        src={image}
        className="w-[100vw] object-contain md:max-h-[30vh] md:w-[50vw]"
        alt=""
        width={800}
        height={600}
      />
    </div>
  )
}

export default PageHero
