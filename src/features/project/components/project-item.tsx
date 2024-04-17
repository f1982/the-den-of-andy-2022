import PlatformTag from './project-item-tag'
import { PROJECT_IMAGE_URL } from '@/config/site-config'
import { ProjectItemData } from '@/types/projects'
import cn from 'classnames'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem: React.FC<ProjectItemData> = ({
  id,
  title,
  description,
  cover,
  type,
  platform,
  tech,
}) => (
  <Link key={id} href={`/project/${id}`} passHref legacyBehavior>
    <div className="cursor-pointer">
      <div className={cn('relative rounded-[1.5rem] bg-background')}>
        <Image
          className={clsx('aspect-video rounded-xl object-cover')}
          src={`${PROJECT_IMAGE_URL}/${cover}`}
          width={500}
          height={300}
          alt={`${title} preview`}
        />
        <h3 className="line-clamp-1 font-semibold">{title}</h3>
        {platform && <PlatformTag text={platform} />}

        <p className="line-clamp-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  </Link>
)

export default ProjectItem
