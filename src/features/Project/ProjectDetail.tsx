// import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectTitle from './components/ProjectTitle';
import Image from '../../components/ui/Image';
import Carousel from '../../components/Carousel';
import { PROJECT_IMAGE_URL } from '../../config/constants';

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
      <ProjectTitle id={slug} title={title} />
      <p>{slug}</p>
      <p>{`/projects/images/${cover}`}</p>
      <motion.figure
        layoutId={`project-cover-${slug}`}
        initial={{ scale: 1, opacity: 1 }}
        // initial={{ scale: 0.8, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
      >
        <Image
          alt={`${title} project cover image`}
          className="object-center w-full"
          src={`/projects/images/${cover}`}
          width={650}
          height={250}
        />
      </motion.figure>
      {getCarousel(images)}
      <p>
        details
        {description}
      </p>
    </article>
  );
}

export default Project;
