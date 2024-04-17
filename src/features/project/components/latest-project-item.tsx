import Tags from '../../../components/molecule/Tags'
import Prose from '@/components/atoms/prose'
import Image from 'next/image'
import React from 'react'

interface LastProjectProps {
  subtitle?: string
  title: string
  cover: string
  platform?: string
  description?: string
}

const LatestProjectItem: React.FC<LastProjectProps> = ({
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

export default LatestProjectItem
