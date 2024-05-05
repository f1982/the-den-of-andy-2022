import PlatformTag from './project-item-tag'
import FormattedDate from '@/components/atoms/formatted-date'
import Tags from '@/components/atoms/tag-cloud'
import LandscapeHero from '@/components/page/hero-landscape'
import { ProjectItemData } from '@/features/project/project-types'
import Image from 'next/image'
import React from 'react'

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
  function getCarousel(imageList, alt) {
    if (!imageList) return null

    return imageList.map((image) => (
      <div key={image} className="mb-8">
        <Image src={`${image}`} width={800} height={600} alt={alt} />
      </div>
    ))
  }

  return (
    <>
      <div className="container mx-auto mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="mb-4">
          <FormattedDate date={start} />
          <span> - </span>
          <FormattedDate date={end} />
        </div>
        {platform && (
          <div className="mb-4">
            <PlatformTag text={platform} />
          </div>
        )}
      </div>
      <LandscapeHero text="" image={cover} />
      <div className="container mx-auto">
        <div className="mb-8 mt-10">
          <h3 className="mb-6 text-lg font-semibold">Technology stacks:</h3>
          <Tags stacks={tech.split(',')} />
        </div>
        <div className="mb-8">
          <p>{description}</p>
        </div>
        {responsibility && (
          <div className="mb-8">
            <p>{responsibility}</p>
          </div>
        )}
        <div className="mb-9">{getCarousel(images, title)}</div>
      </div>
    </>
  )
}

export default ProjectDetailView
