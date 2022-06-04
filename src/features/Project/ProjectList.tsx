import cn from 'classnames';
import { ProjectItemData } from '../../types/projects';
import ProjectItem from './ProjectItem';

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
            <ProjectItem key={item.id} {...item} />
          ))
          : list.map((item) => (
            <ProjectItem key={item.id} {...item} />
          ))}
      </div>
    </section>
  );
}

export default ProjectList;
