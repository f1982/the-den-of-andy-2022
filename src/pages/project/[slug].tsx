import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';
import CloseButton from '../../components/atoms/buttons/CloseButton';
import { getProjectDetail, getProjects } from '../../features/Project/project-helper';
import ProjectDetail from '../../features/Project/ProjectDetail';
import usePageURL from '../../hooks/usePageURL';
import { ProjectItemData } from '../../types/projects';

interface ProjectPageProps {
  detail: ProjectItemData;
}

type ProjectPageType = React.FC<ProjectPageProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
};

const ProjectPage: ProjectPageType = ({ detail }) => {
  const router = useRouter();
  const pageURL = usePageURL();

  const handleClose = () => {
    router.push('/project');
  };

  return (
    <>
      <NextSeo
        title={detail.title}
        additionalMetaTags={[
          { name: 'keywords', content: detail.tech }, // keywords metadata
        ]}
        openGraph={{
          title: detail.title,
          description: detail.description,
          url: pageURL,
          type: 'project',
          images: [
            {
              url: detail.cover,
              width: 850,
              height: 650,
              alt: `Photo of ${detail.title}`,
            },
          ],
        }}
      />
      <article className="mb-32">
        <div className="flex container mx-auto mt-8">
          <div className="flex-1" />
          <CloseButton onClick={handleClose} />
        </div>
        <ProjectDetail {...detail} />
      </article>
    </>
  );
};

ProjectPage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export async function getStaticProps({ params }) {
  const detail = getProjectDetail(params.slug);
  return {
    props: { detail },
  };
}

export async function getStaticPaths() {
  const { projects } = getProjects();
  return {
    paths: projects.map((post) => ({
      params: {
        slug: post.id,
      },
    })),
    fallback: false,
  };
}

export default ProjectPage;
