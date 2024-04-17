import ImageWithLoader from '../../../components/atoms/Image/Image'
import Typography from '../../../components/atoms/typography/Typography'
import Tags from '../../../components/molecule/Tags'
import Prose from '@/components/atoms/prose'
import React from 'react'

interface LastProjectProps {
  subtitle?: string
  title?: string
  cover: string
  platform?: string
  description?: string
}

const LatestProject: React.FC<LastProjectProps> = ({
  subtitle,
  title = undefined,
  cover,
  platform = undefined,
  description = undefined,
}: LastProjectProps) => (
  <div className="mx-auto mb-4 w-full md:mb-6">
    <div className="relative mb-8">
      <ImageWithLoader
        className="h-[240px] w-full rounded-lg object-cover md:h-[360px]"
        alt={title}
        src={cover}
      />
      {platform && (
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
          <Tags stacks={platform.split(',')} />
        </div>
      )}
    </div>
    {/* text layer */}
    <Prose>
      {subtitle && <h4>{subtitle}</h4>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </Prose>
  </div>
)

export default LatestProject
