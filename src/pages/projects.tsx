import { useRouter } from 'next/router';
import React from 'react';
import Submenu from '../features/Menu/Submenu';
import BlogPageTitle from '../components/PageTitle';
import ProjectList from '../features/Project/ProjectList';
import { getProjects } from '../utils/api';
import Container from '../components/Layout/container';

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
    <Container>
      <BlogPageTitle title="Projects" />
      {/* <Submenu items={ProjectSubmenu} /> */}
      <ProjectList list={projects} type={type as string} />
    </Container>
  );
}

export async function getStaticProps() {
  const { projects } = getProjects();
  return {
    props: { projects },
  };
}
