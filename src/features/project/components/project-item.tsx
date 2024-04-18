import PlatformTag from './project-item-tag'
import FormattedDate from '@/components/atoms/formatted-date'
import { PROJECT_IMAGE_URL } from '@/config/site-config'
import { ProjectItemData } from '@/features/project/project-data'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem: React.FC<ProjectItemData> = ({
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
        <Image
          className={clsx(
            'aspect-video w-full rounded-xl object-cover ',
            'ring-1 ring-muted',
          )}
          src={`${PROJECT_IMAGE_URL}/${cover}`}
          width={600}
          height={400}
          alt={`${title} preview`}
        />
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

export default ProjectItem
