import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ProjectTitle from './components/ProjectTitle';
import Image from '../../components/Image/Image';
import Carousel from '../../components/Carousel/Carousel';
import { PROJECT_IMAGE_URL } from '../../constants/paths';
import CloseButton from '../../components/Button/CloseButton';
import TechStackItem from './components/TechStackItem';

function Project({
  slug, title, cover, tech, description, images,
}) {
  const router = useRouter();

  function getCarousel(imageList) {
    if (!imageList) return null;
    const fullPathImages = imageList.map((image) => `${PROJECT_IMAGE_URL}/${image}`);
    return <Carousel images={fullPathImages} />;
  }

  return (
    <article className="container mx-auto mb-32">
      <div>
        <CloseButton
          onClick={() => router.back()}
        />
      </div>
      <ProjectTitle id={slug} title={title} />
      <TechStackItem stacks={tech.split(',')} />
      <Image
        alt={`${title} project cover image`}
        className="object-center w-full mb-9"
        src={`${PROJECT_IMAGE_URL}/${cover}`}
        width={650}
        height={250}
      />
      <div className="px-10 mb-9">
        {getCarousel(images)}
      </div>
      <p>
        {description}
      </p>
    </article>
  );
}

export default Project;
