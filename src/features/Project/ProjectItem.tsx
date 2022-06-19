import Link from 'next/link';
import Image from '../../components/atoms/Image/Image';
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
          <Image
            className="rounded-xl object-cover w-full h-[270px] mb-6"
            src={`${PROJECT_IMAGE_URL}/${cover}`}
            alt={`${title} preview`}
          />
          <Typography variant="h4" as="h2">{title}</Typography>
          {platform && (<PlatformTag text={platform} />)}
          <Typography
            variant="body"
            className="leading-[1.2] line-clamp-2"
          >
            {description}
          </Typography>
        </div>
      </div>
    </Link>

  );
}
