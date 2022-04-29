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
        <div className="
          bg-background
          transition-shadow ease-in duration-600
          rounded-[2rem]
          h-48
          relative
          hover:shadow-md
        "
        >
          <img
            className="absolute rounded-xl w-full h-full object-cover"
            alt={title}
            src={cover}
          />
          {/* text layer */}
          <div className="absolute z-20 flex flex-row w-full h-full">
            <div className="flex-1" />
            <div className="pr-10 flex flex-col ">
              <Typography variant="h3" title={title} className="text-[white]" />
              {platform && (<div><PlatformTag text={platform} /></div>)}

            </div>
          </div>
        </div>
      </div>
    </Link>

  );
}

export default HighlightProjectItem;