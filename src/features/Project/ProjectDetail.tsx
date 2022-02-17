import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ProjectTitle from './components/ProjectTitle';
import Image from '../../components/Image/Image';
import Carousel from '../../components/Carousel';
import { PROJECT_IMAGE_URL } from '../../config/constants';
import CloseButton from '../../components/Button/CloseButton';

function Project({
  slug, title, cover, description, images,
}) {
  const router = useRouter();

  function getCarousel(imageList) {
    if (!imageList) return null;
    const fullPathImages = imageList.map((image) => `${PROJECT_IMAGE_URL}/${image}`);
    return <Carousel images={fullPathImages} />;
  }

  return (
    <article className="container mx-auto mb-32">
      <div className="flex flex-column">
        <ProjectTitle id={slug} title={title} />
        <CloseButton
          onClick={() => router.back()}
        />
      </div>
      <motion.figure
        layoutId={`project-cover-${slug}`}
        initial={{ scale: 1, opacity: 1 }}
      >
        <Image
          alt={`${title} project cover image`}
          className="object-center w-full"
          src={`${PROJECT_IMAGE_URL}/${cover}`}
          width={650}
          height={250}
        />
      </motion.figure>
      {getCarousel(images)}
      <p>
        {description}
      </p>
    </article>
  );
}

export default Project;
