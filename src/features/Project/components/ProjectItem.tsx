// import Image from 'next/image';
import Link from 'next/link';
import { PROJECT_IMAGE_URL } from '../../../constants/paths';
import { ProjectItemData } from '../../../types/projects';

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
        <div className="bg-background transition-shadow ease-in duration-600 p-6 rounded-xl relative hover:shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="
            h-60 rounded-xl w-full object-cover mb-6
            "
            alt={title}
            src={`${PROJECT_IMAGE_URL}/${cover}`}
            width={650}
            height={250}
          />
          <h3 className="text-md mb-3">{title}</h3>
          <span className="
          absolute top-3 right-12
          bg-secondary-dark
          font-bold
          text-on-surface
          px-2 py-0.5 rounded-lg
          tracking-widest text-sm
          "
          >
            {platform}
          </span>
          <p className="h-12" style={{ overflow: 'hidden' }}>{description}</p>
        </div>
      </div>
    </Link>

  );
}
