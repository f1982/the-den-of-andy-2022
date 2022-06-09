import Link from 'next/link';
import Typography from '../../components/atoms/typography/Typography';
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
      {/* md:p-3 for the space of shadow */}
      <div className="p-0 md:p-2 cursor-pointer">
        <div className="
        bg-background
        transition-shadow ease-in duration-600
        rounded-[1.5rem]
        p-4 md:p-6
        relative
        hover:shadow-md
        "
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-xl object-cover w-full h-[300px] mb-6"
            alt={title}
            src={`${PROJECT_IMAGE_URL}/${cover}`}
          />
          <Typography variant="h4" as="h2">{title}</Typography>
          {platform && (<PlatformTag text={platform} />)}
          <p className="h-12 tracking-tight mb-2" style={{ overflow: 'hidden' }}>{description}</p>
        </div>
      </div>
    </Link>

  );
}
