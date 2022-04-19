import Link from 'next/link';
import ProjectItem from './components/ProjectItem';
import { ProjectItemData } from '../../types/projects';

function ProjectList({
  list,
  type = '',
}:{
  list:ProjectItemData[],
  type:string}) {
  return (
    <section>
      <div className="flex flex-wrap mb-3">
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
