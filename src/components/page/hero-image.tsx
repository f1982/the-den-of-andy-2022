import tailwindConfig from '../../../tailwind.config'
import Image from '../atoms/Image/Image'
import cn from 'classnames'
import React, { PropsWithChildren } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

interface PageHeroProps {
  image?: string
  className?: string
}

const PageHero: React.FC<PropsWithChildren<PageHeroProps>> = ({
  image,
  children,
  className,
}) => {
  return (
    <div
      className={cn('flex flex-col', className)}
      style={{
        backgroundPosition: '15px 0, 45px 0, 0 0, 0 0',
        backgroundSize: '30px 60px',
        background: `linear-gradient(0deg, yellow 25%, transparent 25%)`,
      }}>
      <div className="flex-1" />
      <div className={cn('container mb-3 mt-8 px-3 md:mt-16 md:px-0')}>
        {!!image && (
          <Image
            src={image}
            alt="hero image"
            className="h-[360px] md:h-[540px]"
          />
        )}
        {/* {children} */}
      </div>
    </div>
  )
}

export default PageHero
