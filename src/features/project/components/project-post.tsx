import PlatformTag from './project-item-tag'
import FormattedDate from '@/components/atoms/formatted-date'
import Tags from '@/components/atoms/tag-cloud'
import LandscapeHero from '@/components/page/hero-landscape'
import { PROJECT_IMAGE_URL } from '@/config/site-config'
import { ProjectItemData } from '@/features/project/project-data'
import React from 'react'

const Project: React.FC<ProjectItemData> = ({
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
    const fullPathImages = imageList.map(
      (image) => `${PROJECT_IMAGE_URL}/${image}`,
    )
    return imageList.map((image) => (
      <div key={image} className="mb-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${PROJECT_IMAGE_URL}/${image}`} alt={alt} />
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
      <LandscapeHero text="" image={`${PROJECT_IMAGE_URL}/${cover}`} />
      <div className="container mx-auto">
        <div className="mb-8 mt-10">
          <h3>Technology stacks:</h3>
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

export default Project
