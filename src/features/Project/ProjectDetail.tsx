import { motion } from 'framer-motion';
import ProjectTitle from './components/ProjectTitle';
import Image from '../../components/ui/Image';
import Carousel from '../../components/Carousel';
import { PROJECT_IMAGE_URL } from '../../config/constants';
import CloseButton from '../../components/ui/CloseButton';

function Project({
  slug, title, cover, description, images,
}) {
  function getCarousel(imageList) {
    if (!imageList) return null;
    const fullPathImages = imageList.map((image) => `${PROJECT_IMAGE_URL}/${image}`);
    return <Carousel images={fullPathImages} />;
  }

  return (
    <article className="mb-32">
      <div className="flex flex-column">
        <ProjectTitle id={slug} title={title} />
        <CloseButton />
      </div>
      <motion.figure
        layoutId={`project-cover-${slug}`}
        initial={{ scale: 1, opacity: 1 }}
        // initial={{ scale: 0.8, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
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
