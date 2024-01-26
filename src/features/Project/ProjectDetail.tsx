import React from 'react';
import Tags from '../../components/atoms/tags/Tags';
import Typography from '../../components/atoms/typography/Typography';
import PostDate from '../../components/organisms/article/PostDate';
import LandscapeHero from '../../components/organisms/blocks/ContentPageHero';
import { PROJECT_IMAGE_URL } from '../../constants/paths';
import { ProjectItemData } from '../../types/projects';
import PlatformTag from './components/PlatformTag';

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
    if (!imageList) return null;
    const fullPathImages = imageList.map((image) => `${PROJECT_IMAGE_URL}/${image}`);
    // return <Carousel images={fullPathImages} />;
    return imageList.map((image) => (
      <div key={image} className="mb-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${PROJECT_IMAGE_URL}/${image}`} alt={alt} />
      </div>
    ));
  }

  return (
    <>
      <div className="container mx-auto mb-8">
        <Typography variant="h2" as="h1">
          {title}
        </Typography>
        <div className="mb-4">
          <PostDate date={start} />
          <span> - </span>
          <PostDate date={end} />
        </div>
        {platform && (
          <div className="mb-4">
            <PlatformTag text={platform} />
          </div>
        )}
      </div>
      <LandscapeHero text="" image={`${PROJECT_IMAGE_URL}/${cover}`} />
      <div className="container mx-auto">
        <div className="mt-10 mb-8">
          <Typography variant="h3">Technology stacks:</Typography>
          <Tags stacks={tech.split(',')} />
        </div>
        <div className="mb-8">
          <Typography variant="body">{description}</Typography>
        </div>
        {responsibility && (
          <div className="mb-8">
            <Typography variant="body">{responsibility}</Typography>
          </div>
        )}
        <div className="mb-9">{getCarousel(images, title)}</div>
      </div>
    </>
  );
};

export default Project;
