import { useRouter } from 'next/router';
import React from 'react';
import Submenu from '../features/Menu/Submenu';

import ProjectList from '../features/Project/ProjectList';
import { getProjects } from '../utils/api';

const ProjectSubmenu = [
  {
    name: 'test',
    link: 't1',
  },
  {
    name: 'test2',
    link: 't2',
  },
  {
    name: 'test3',
    link: 't3',
  },
];

export default function Projects({ projects }) {
  const router = useRouter();
  const { type } = router.query;
  return (
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <h1 className="text-8xl">projects</h1>
      <Submenu items={ProjectSubmenu} />
      <ProjectList list={projects} type={type as string} />
    </div>
  );
}

export async function getStaticProps() {
  const { projects } = getProjects();
  return {
    props: { projects },
  };
}
