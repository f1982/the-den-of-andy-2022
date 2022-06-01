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
      <div className="w-[600px] h-[480px] cursor-pointer">
        <div
          className="
          bg-background
          w-full
          h-full
          transition-shadow ease-in duration-600
          rounded-[2rem]
          border
          relative
          hover:shadow-md
        "
        >
          <div className="absolute p-4 w-full h-full">
            <img
              className="rounded-[1rem] w-full h-full object-cover"
              alt={title}
              src={cover}
            />
          </div>
          {/* text layer */}
          <div className="absolute z-20 flex flex-row w-full h-full">
            <div className="flex-1" />
            <div className="p-10 flex flex-col ">
              <div className="flex-1" />
              <Typography variant="h3" className="mb-0 text-on-surface">{title}</Typography>
              {platform && (<div><PlatformTag text={platform} /></div>)}
              <div className="mb-4">
                <Typography variant="body" className="text-on-surface">Grâce neuf mur tandis que alors. Inutile humain poser curiosité. Beau absolument enlever cercle sous humide approcher autrefois.</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
}

export default HighlightProjectItem;