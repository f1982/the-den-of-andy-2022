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
}: Partial<ProjectItemData>) {
  return (
    <Link key={id} href={`/project/${id}`} passHref>
      <div className="w-full cursor-pointer">
        <div
          className="
          bg-background
          transition-shadow ease-in duration-600
          rounded-[2rem]
          relative
          hover:shadow-md
        "
          style={{ height: '9rem' }}
        >
          <img
            className="absolute rounded-[2rem] w-full h-full object-cover"
            alt={title}
            src={cover}
          />
          {/* text layer */}
          <div className="absolute z-20 flex flex-row w-full h-full">
            <div className="flex-1" />
            <div className="pr-10 flex flex-col pb-[1rem]">
              <div className="flex-1" />
              <Typography variant="h3" className="text-on-surface mb-0">{title}</Typography>
              {platform && (<div className="mb-6 mt-0"><PlatformTag text={platform} /></div>)}
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
}

export default HighlightProjectItem;