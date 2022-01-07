import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../../components/Layout/container';
import CloseButton from '../../components/ui/CloseButton';

import ProjectDetail from '../../features/Project/Project';
import { ProjectItemData } from '../../types/projects';
import { getProjectDetail, getProjects } from '../../utils/api';

export default function ProjectPage({ detail }:{detail:ProjectItemData}) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Container>
      <CloseButton />

      <ProjectDetail
        slug={slug}
        {...detail}
      />
    </Container>
  );
}

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
