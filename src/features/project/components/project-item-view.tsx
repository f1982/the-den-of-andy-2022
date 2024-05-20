import React from 'react'

import Link from 'next/link'

import FormattedDate from '@/components/atoms/formatted-date'
import HoverScaleImage from '@/components/atoms/hover-scale-image'

import { ProjectItemData } from '@/features/project/project-types'

import PlatformTag from './project-item-tag'

const ProjectItemView: React.FC<ProjectItemData> = ({
  id,
  title,
  description,
  cover,
  start,
  type,
  platform,
  tech,
}) => (
  <Link key={id} href={`/project/${id}`} passHref legacyBehavior>
    <div className="cursor-pointer">
      <div className="relative mb-3">
        <HoverScaleImage src={cover} alt={title}></HoverScaleImage>
        <div className="absolute bottom-3 right-3">
          {platform && <PlatformTag text={platform} />}
        </div>
      </div>
      <h3 className="line-clamp-1 font-semibold">{title}</h3>
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {description}
      </p>
      <FormattedDate className="text-xs text-muted-foreground" date={start} />
    </div>
  </Link>
)

export default ProjectItemView
