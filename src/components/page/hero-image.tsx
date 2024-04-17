import cn from 'classnames'
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
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <Image
        src={image}
        className="h-[600px] object-contain"
        alt=""
        width={800}
        height={600}
      />
    </div>
  )
}

export default PageHero
