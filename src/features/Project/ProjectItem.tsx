import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import Image from '../../components/atoms/Image/Image';
import Typography from '../../components/atoms/typography/Typography';
import { PROJECT_IMAGE_URL } from '../../constants/paths';
import { ProjectItemData } from '../../types/projects';
import PlatformTag from './components/PlatformTag';

const ProjectItem: React.FC<ProjectItemData> = ({
  id,
  title,
  description,
  cover,
  type,
  platform,
  tech,
}) => (
  <Link key={id} href={`/project/${id}`} passHref>
    <div className="p-0 md:p-2 cursor-pointer">
      <div className={cn(
        'relative bg-background rounded-[1.5rem]',
        'transition-shadow ease-in duration-600',
        'p-4 md:p-6',
        'md:hover:shadow-md',
        '',
      )}
      >
        <Image
          className={cn(
            'rounded-xl object-cover',
            'w-full h-[210px] md:h-[180px] lg:h-[270px] mb-6',
          )}
          src={`${PROJECT_IMAGE_URL}/${cover}`}
          alt={`${title} preview`}
        />
        <Typography variant="h4" as="h2">{title}</Typography>
        {platform && (<PlatformTag text={platform} />)}
        <Typography
          variant="body"
          className="leading-[1.2] line-clamp-2"
        >
          {description}
        </Typography>
      </div>
    </div>
  </Link>
);

export default ProjectItem;