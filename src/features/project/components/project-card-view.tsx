import React from 'react'

import Link from 'next/link'

import FormattedDate from '@/components/atoms/formatted-date'
import HoverScaleImage from '@/components/atoms/hover-scale-image'

import { ProjectItemData } from '@/features/project/project-types'

import PlatformTag from './project-item-tag'

interface ProjectCardViewProps {
  url: string
  title: string
  cover: string
  start: string
  platform: string
}
const ProjectCardView: React.FC<ProjectCardViewProps> = ({
  url,
  title,
  cover,
  start,
  platform,
}) => (
  <Link key={url} href={url} passHref legacyBehavior>
    <div className="flex cursor-pointer flex-col gap-3">
      <div className="relative">
        <HoverScaleImage src={cover} alt={title}></HoverScaleImage>
        <div className="absolute bottom-3 right-3">
          <PlatformTag text={platform} />
        </div>
      </div>
      <div className="pl-2">
        <h3 className="line-clamp-1 font-semibold">{title}</h3>
        <FormattedDate className="text-xs text-muted-foreground" date={start} />
      </div>
    </div>
  </Link>
)

export default ProjectCardView
