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
            className="rounded-xl object-cover w-full h-[300px] mb-6"
            alt={title}
            src={`${PROJECT_IMAGE_URL}/${cover}`}
          // width={650}
          // height={250}
          />
          <Typography variant="h4" as="h2">{title}</Typography>
          {platform && (<PlatformTag text={platform} />)}
          <p className="h-12 tracking-tight" style={{ overflow: 'hidden' }}>{description}</p>
        </div>
      </div>
    </Link>

  );
}
