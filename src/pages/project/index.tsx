import { t } from 'i18next';
import { useRouter } from 'next/router';
import React from 'react';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import BlogPageTitle from '../../components/atoms/typography/Headline';
import ProjectList from '../../features/Project/ProjectList';
import { getProjects } from '../../utils/project-helper';
import Typography from '../../components/atoms/typography/Typography';

export default function Projects({ projects }) {
  const router = useRouter();
  const { type } = router.query;
  return (
    <>
      <TabTitle pageTitle={t('project.pageTitle')} />
      <div className="container mx-auto">
        <Typography variant="h1" as="h1" highlight title={t('project.pageTitle')} />
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
