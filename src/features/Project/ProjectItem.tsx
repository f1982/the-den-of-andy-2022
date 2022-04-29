import Link from 'next/link';
import { PROJECT_IMAGE_URL } from '../../constants/paths';
import { ProjectItemData } from '../../types/projects';
import PlatformTag from './components/PlatformTag';

export default function ProjectItem({
  id,
  title,
  description,
  cover,
  type,
  platform,
  tech,
}: ProjectItemData) {
  return (
    <Link key={id} href={`/project/${id}`} passHref>
      <div className="lg:w-1/2 p-3 cursor-pointer">
        <div className="
        bg-background
        transition-shadow ease-in duration-600
        rounded-[2rem]
        p-6
        relative
        hover:shadow-md
        "
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-60 rounded-xl w-full object-cover mb-6"
            alt={title}
            src={`${PROJECT_IMAGE_URL}/${cover}`}
            width={650}
            height={250}
          />
          <h3 className="text-md mb-3">{title}</h3>
          {platform && (<PlatformTag text={platform} />)}
          <p className="h-12" style={{ overflow: 'hidden' }}>{description}</p>
        </div>
      </div>
    </Link>

  );
}
