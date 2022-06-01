import { t } from 'i18next';
import { useRouter } from 'next/router';
import React from 'react';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import PageHero from '../../components/organisms/blocks/PageHero';
import PageTitle from '../../components/organisms/blocks/PageTitle';
import ProjectList from '../../features/Project/ProjectList';
import { getProjects } from '../../utils/project-helper';

export default function Projects({ projects }) {
  const router = useRouter();
  const { type } = router.query;
  return (
    <>
      <TabTitle pageTitle={t('project.pageTitle')} />
      <PageHero image="/static/images/cartoon-rocket.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle title={t('project.headline')} description={t('project.intro')} />
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
