// import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../../../components/Button/Button';
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
      <div className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer">
        <div className="bg-surface p-3 rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-60 rounded-xl w-full object-cover mb-6"
            alt={title}
            src={`${PROJECT_IMAGE_URL}/${cover}`}
            width={650}
            height={250}
          />
          <h3 className="text-md mb-3">{title}</h3>
          <span className="tracking-widest text-sm">{platform}</span>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>

  );
}
