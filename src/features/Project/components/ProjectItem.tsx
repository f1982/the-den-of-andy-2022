// import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/ui/Button';
import { ProjectItemData } from '../../../types/projects';
import TechStackItem from './TechStackItem';
import Image from '../../../components/ui/Image';

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

    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image
          alt="content"
          src={`/projects/images/${cover}`}
          width={650}
          height={250}
        />
      </div>
      <h2 className="title-font text-2xl font-bold font-as text-gray-900 mt-6 mb-3">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
      <p className="leading-relaxed text-base">{type}</p>
      <p className="leading-relaxed text-base">{platform}</p>
      <TechStackItem stacks={tech.split(',')} />
      <Link key={id} href={`/project/${id}`} passHref>
        <Button type="primary">View</Button>
      </Link>
    </div>

  );
}
