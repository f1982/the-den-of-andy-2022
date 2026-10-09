import React from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import FormattedDate from '@/components/shared/formatted-date'
import Tags from '@/components/shared/tag-cloud'

import { ProjectItemData } from '@/features/project/project-types'

import PlatformTag from './project-item-tag'

const ProjectDetailView: React.FC<ProjectItemData> = ({
  title,
  cover,
  tech,
  platform,
  start,
  end,
  description,
  responsibility,
  images,
}) => {
  return (
    <>
      <div className="mx-auto mb-3 mt-6 flex w-full flex-col justify-start gap-9 bg-secondary py-12">
        <div className="container mx-auto mb-[150px] flex flex-col gap-3">
          <div>
            <FormattedDate date={start} />
            <span> - </span>
            <FormattedDate date={end} />
          </div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <div>
            <PlatformTag text={platform} />
          </div>
        </div>
      </div>

      <div className="container mb-12 mt-[-180px] max-w-5xl">
        <Image
          src={cover}
          className={clsx(
            'aspect-video w-full rounded-lg bg-card object-cover',
            'shadow-2xl',
          )}
          width={800}
          height={600}
          sizes="(max-width: 1024px) 100vw, 1024px"
          preload
          alt={title!}
        />
      </div>

      <div className="container mx-auto flex max-w-3xl flex-col gap-9">
        <div>
          <h3 className="mb-6 text-lg font-semibold">Technology stacks:</h3>
          <Tags stacks={tech.split(',')} />
        </div>
        <p>{description}</p>
        <p>{responsibility}</p>

        {images.map((image) => (
          <div key={image} className="mb-8">
            <Image
              src={`${image}`}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 768px"
              alt={title}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectDetailView
