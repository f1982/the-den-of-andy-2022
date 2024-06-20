import React from 'react'

import Image from 'next/image'

import Prose from '@/components/shared/prose'
import Tags from '@/components/shared/tag-cloud'

interface LastProjectProps {
  subtitle?: string
  title: string
  cover: string
  platform?: string
  description?: string
}

const LatestProjectItemView: React.FC<LastProjectProps> = ({
  subtitle,
  title,
  cover,
  platform = undefined,
  description = undefined,
}: LastProjectProps) => (
  <div className="mx-auto mb-4 w-full md:mb-6">
    <div className="relative mb-8">
      <Image
        className="w-full rounded-lg object-cover"
        width={500}
        height={300}
        alt={title}
        src={cover}
      />
      {platform && (
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
          <Tags stacks={platform.split(',')} />
        </div>
      )}
    </div>

    <Prose>
      {subtitle && <h4>{subtitle}</h4>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </Prose>
  </div>
)

export default LatestProjectItemView
