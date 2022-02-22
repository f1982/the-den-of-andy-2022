import { useRouter } from 'next/router';
import Modal from 'react-modal';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import ProjectDetail from '../../features/Project/ProjectDetail';
import { ProjectItemData } from '../../types/projects';
import { getProjectDetail, getProjects } from '../../utils/project-helper';

Modal.setAppElement('#__next');
const fullConfig = resolveConfig(tailwindConfig);
const customModalStyles = {
  content: {
    top: '39px',
    bottom: '0',
    left: '100px',
    right: '100px',
    backgroundColor: fullConfig.theme.colors.surface,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

function ProjectPage({ detail }:{detail:ProjectItemData}) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Modal
      isOpen
      onRequestClose={() => router.push('/project')}
      style={customModalStyles}
      contentLabel="Post modal"
    >
      <ProjectDetail
        slug={slug}
        {...detail}
      />
    </Modal>
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

export default ProjectPage;
