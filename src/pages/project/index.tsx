import { t } from 'i18next';
import { useRouter } from 'next/router';
import React from 'react';
import TabTitle from '../../components/SiteSEO';
import BlogPageTitle from '../../components/Typography/Headline';
import ProjectList from '../../features/Project/ProjectList';
import { getProjects } from '../../utils/project-helper';

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
      <div className="container mx-auto">
        <BlogPageTitle title="Projects" />
        <ProjectList list={projects} type={type as string} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { projects } = getProjects();
  return {
    props: { projects },
  };
}
