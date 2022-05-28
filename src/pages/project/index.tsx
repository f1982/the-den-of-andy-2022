import { t } from 'i18next';
import { useRouter } from 'next/router';
import React from 'react';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import BlogPageTitle from '../../components/atoms/typography/Headline';
import ProjectList from '../../features/Project/ProjectList';
import { getProjects } from '../../utils/project-helper';
import Typography from '../../components/atoms/typography/Typography';
import PageHero from '../../components/organisms/blocks/PageHero';

export default function Projects({ projects }) {
  const router = useRouter();
  const { type } = router.query;
  return (
    <>
      <TabTitle pageTitle={t('project.pageTitle')} />
      <PageHero image="/static/images/tv-oldschool.png" />
      <div className="container mx-auto mb-[2rem]">
        <div className="flex flex-col items-center justify-center">
          <Typography variant="h1" as="h1" className="inline" highlight>{t('project.pageTitle')}</Typography>
          <Typography variant="body" as="div" className="inline">{t('project.intro')}</Typography>
        </div>
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
