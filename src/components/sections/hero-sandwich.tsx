import React from 'react'

import { HeroData } from '@/types'
import clsx from 'clsx'
import Image from 'next/image'

const SandwichHero: React.FC<HeroData> = ({
  title,
  subtitle,
  image,
  description,
  buttons,
  className,
  id,
  imageAlt = 'Illustration',
  headingLevel = 2,
}) => {
  const Heading = headingLevel === 1 ? 'h1' : 'h2'

  return (
    <section
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'flex-col',
        className,
      )}
      id={id}>
      <div className={clsx('mx-auto mb-6 w-4/5 md:max-w-80')}>
        <Image
          width={800}
          height={600}
          alt={imageAlt}
          src={image}
          sizes="(max-width: 768px) 80vw, 320px"
        />
      </div>
      <div className="prose mx-auto flex w-full max-w-none flex-col gap-6 dark:prose-invert">
        <Heading className="text-center">{title}</Heading>
        {subtitle &&
          (headingLevel === 1 ? (
            <p className="text-center text-xl font-semibold">{subtitle}</p>
          ) : (
            <h3 className="text-center">{subtitle}</h3>
          ))}
        <p>{description}</p>
        <div className="flex justify-center">{buttons}</div>
      </div>
    </section>
  )
}

export default SandwichHero
