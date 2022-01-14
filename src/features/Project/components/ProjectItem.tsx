// import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import { ProjectItemData } from '../../../types/projects';
import TechStackItem from './TechStackItem';
import Image from '../../../components/ui/Image';
import { PROJECT_IMAGE_URL } from '../../../config/constants';

export default function ProjectItem({
  id,
  title,
  description,
  cover,
  type,
  platform,
  tech,
}:ProjectItemData) {
  return (
    <Link key={id} href={`/project/${id}`} passHref>
      <motion.div
        className="
          sm:w-1/2
          mb-10
          px-4
          cursor-pointer
        "
        whileHover={{
          position: 'relative',
          zIndex: 1,
          background: 'white',
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          transition: {
            duration: 0.2,
          },
        }}
      >
        <div className="rounded-lg h-64 overflow-hidden">
          <motion.figure
            layoutId={`project-cover-${id}`}
            initial={{ scale: 1, opacity: 1 }}
          >
            <Image
              alt="content"
              src={`${PROJECT_IMAGE_URL}/${cover}`}
              width={650}
              height={250}
            />
          </motion.figure>
        </div>
        <motion.h2
          className="title-font text-2xl font-bold font-as text-gray-900 mt-6 mb-3"
          layoutId={`project-title-${id}`}
        >
          {title}
        </motion.h2>
        <p className="leading-relaxed text-base">{description}</p>
        <p className="leading-relaxed text-base">{type}</p>
        <p className="leading-relaxed text-base">{platform}</p>
        <TechStackItem stacks={tech.split(',')} />

        <Button type="primary">View</Button>
      </motion.div>
    </Link>

  );
}
