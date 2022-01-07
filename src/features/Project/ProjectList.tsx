// import Project from './Project'

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

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {type ? list.filter((item) => item.type === type).map((item) => (
            <Link key={item.id} href={`/project/${item.id}`} passHref>
              <ProjectItem {...item} />
            </Link>
          ))
            : list.map((item) => (
              <ProjectItem key={item.id} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
