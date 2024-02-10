import ImageWithLoader from '../../../../../components/atoms/Image/Image'
import Typography from '../../../../../components/atoms/typography/Typography'
import Tags from '../../../../../components/molecule/Tags'
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
  <div className="w-full md:w-[540px] mb-4 md:mb-6 mx-auto">
    <div className="relative mb-8">
      <ImageWithLoader
        className="rounded-lg object-cover w-full h-[240px] md:h-[360px]"
        alt={title}
        src={cover}
      />
      {platform && (
        <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4">
          <Tags stacks={platform.split(',')} />
        </div>
      )}
    </div>
    {/* text layer */}
    <div className="prose dark:prose-invert">
      {subtitle && <h4>{subtitle}</h4>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  </div>
)

export default LatestProject
