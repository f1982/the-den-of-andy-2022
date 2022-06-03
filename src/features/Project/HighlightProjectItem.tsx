/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Typography from '../../components/atoms/typography/Typography';
import { ProjectItemData } from '../../types/projects';
import PlatformTag from './components/PlatformTag';

function HighlightProjectItem({
  id,
  title,
  cover,
  type,
  platform,
  tech,
  description,
}: Partial<ProjectItemData>) {
  return (
    <Link key={id} href={`/project/${id}`} passHref>
      <div className="md:w-[600px] w-full h-[480px] cursor-pointer">
        <div
          className="
          bg-surface
          w-full
          h-full
          transition-shadow ease-in duration-600
          rounded-lg
          relative
        "
        >
          <div className="absolute w-full h-full">
            <img
              className="rounded-lg w-full h-full object-cover"
              alt={title}
              src={cover}
            />
          </div>
          {/* text layer */}
          <div className="absolute bg-background z-20 right-0 bottom-0 p-4 md:p-8">
            <Typography variant="h3" className="mb-0">{title}</Typography>
            {platform && (<div><PlatformTag text={platform} /></div>)}
            {description && (
              <div className="mb-4">
                <Typography variant="body" className="text-on-primary">{description}</Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>

  );
}

export default HighlightProjectItem;