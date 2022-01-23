import { useRouter } from 'next/router';
import React from 'react';
import { t } from 'i18next';
import Submenu from '../features/Menu/Submenu';
import BlogPageTitle from '../components/Headline';
import ProjectList from '../features/Project/ProjectList';
import { getProjects } from '../utils/api';
import Container from '../components/Layout/container';
import TabTitle from '../components/SiteSEO';

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
    <>
      <TabTitle pageTitle={t('project.pageTitle')} />
      <Container>
        <BlogPageTitle title="Projects" />
        <ProjectList list={projects} type={type as string} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { projects } = getProjects();
  return {
    props: { projects },
  };
}
