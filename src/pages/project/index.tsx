import { t } from 'i18next';
import { useRouter } from 'next/router';
import React from 'react';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import PageHero from '../../components/organisms/blocks/PageHero';
import PageTitle from '../../components/organisms/blocks/PageTitle';
import ProjectList from '../../features/Project/ProjectList';
import { ProjectItemData } from '../../types/projects';
import { getProjects } from '../../features/Project/project-helper';

const Projects = ({ projects }: { projects: ProjectItemData[] }) => {
  const router = useRouter();
  let { type } = router.query;
  // show coding project in default
  type = !type ? 'coding' : '';

  return (
    <>
      <TabTitle pageTitle={t('project.pageTitle')} />
      <PageHero image="/static/images/cartoon-rocket.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle title={t('project.headline')} description={t('project.intro')} />
        {/* project list */}
        <ProjectList list={projects} type={type as string} />
      </div>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const { projects } = getProjects();
  return {
    props: { projects },
  };
}
