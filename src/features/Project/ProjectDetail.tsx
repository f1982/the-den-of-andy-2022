import { useRouter } from 'next/router';
import Carousel from '../../components/atoms/carousel/Carousel';
import Typography from '../../components/atoms/typography/Typography';
import LandscapeHero from '../../components/organisms/blocks/ContentPageHero';
import { PROJECT_IMAGE_URL } from '../../constants/paths';
import PostDate from '../../components/organisms/article/PostDate';
import TechStackItem from './components/TechStackItem';

function Project({
  slug, title, cover, tech, start, end, description, images,
}) {
  const router = useRouter();

  function getCarousel(imageList) {
    if (!imageList) return null;
    const fullPathImages = imageList.map((image) => `${PROJECT_IMAGE_URL}/${image}`);
    return <Carousel images={fullPathImages} />;
  }

  return (
    <>
      <div className="container mx-auto mb-8">
        <Typography variant="h2" as="h1">{title}</Typography>
        <PostDate date={start} />
        <span> - </span>
        <PostDate date={end} />
      </div>
      <LandscapeHero text="" image={`${PROJECT_IMAGE_URL}/${cover}`} />
      <div className="container mx-auto">
        <TechStackItem stacks={tech.split(',')} className="mt-10 mb-8" />
        <p>{description}</p>
        <div className="mb-9">
          {getCarousel(images)}
        </div>
      </div>
    </>
  );
}

export default Project;
