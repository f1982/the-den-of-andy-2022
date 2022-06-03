import Link from 'next/link';
import cn from 'classnames';
import ProjectItem from './ProjectItem';
import { ProjectItemData } from '../../types/projects';

function ProjectList({
  list,
  type = '',
}: {
  list: ProjectItemData[],
  type: string
}) {
  return (
    <section>
      <div className={cn(
        'grid grid-cols-1',
        'md:grid-cols-2',
        'gap-x-8',
        'gap-y-8',
        'mb-16',
      )}
      >
        {type
          ? list.filter((item) => item.type === type).map((item) => (
            <Link key={item.id} href={`/project/${item.id}`} passHref>
              <ProjectItem {...item} />
            </Link>
          ))
          : list.map((item) => (
            <ProjectItem key={item.id} {...item} />
          ))}
      </div>
    </section>
  );
}

export default ProjectList;
