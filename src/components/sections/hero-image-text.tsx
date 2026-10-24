import React from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import { HeroData } from '../../types'

const ColumnHero: React.FC<HeroData & { direction?: 'l2r' | 'r2l' }> = ({
  title,
  subtitle,
  image,
  description,
  buttons,
  direction = 'l2r',
  className,
  imageAlt = 'Illustration',
}) => (
  <section
    className={clsx(
      'flex flex-col items-center gap-x-16',
      direction === 'l2r' ? 'md:flex-row' : 'md:flex-row-reverse',
      className,
    )}>
    <Image
      className="mb-6 object-cover md:mb-0 md:w-2/5"
      width={500}
      height={300}
      alt={imageAlt}
      src={image}
      sizes="(max-width: 768px) 100vw, 500px"
    />
    <div className="prose flex flex-col items-center md:w-3/5 md:items-start">
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      <div>
        <p>{description}</p>
      </div>
      <div className="mt-6 flex gap-x-3">{buttons}</div>
    </div>
  </section>
)

export default ColumnHero
