import Image from '../../../components/atoms/Image/Image'
import Typography from '../../../components/atoms/typography/Typography'
import { PROJECT_IMAGE_URL } from '../../../config/site-config'
import { ProjectItemData } from '../../../types/projects'
import PlatformTag from './PlatformTag'
import cn from 'classnames'
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
      <div
        className={cn(
          'relative rounded-[1.5rem] bg-background',
          'duration-600 transition-shadow ease-in',
          'md:hover:shadow-md',
          '',
        )}>
        <Image
          className={cn(
            'rounded-xl object-cover',
            'mb-6 h-[210px] w-full md:h-[180px] lg:h-[270px]',
          )}
          src={`${PROJECT_IMAGE_URL}/${cover}`}
          alt={`${title} preview`}
        />
        <Typography variant="h4" as="h2">
          {title}
        </Typography>
        {platform && <PlatformTag text={platform} />}
        <Typography variant="body" className="line-clamp-2 leading-[1.2]">
          {description}
        </Typography>
      </div>
    </div>
  </Link>
)

export default ProjectItem
