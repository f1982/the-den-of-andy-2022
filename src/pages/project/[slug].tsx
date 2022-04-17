import { useRouter } from 'next/router';
import Modal from 'react-modal';
import CloseButton from '../../components/atoms/buttons/CloseButton';
import customModalStyles from '../../constants/modelConfig';
import ProjectDetail from '../../features/Project/ProjectDetail';
import { ProjectItemData } from '../../types/projects';
import { getProjectDetail, getProjects } from '../../utils/project-helper';

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
      <article>
        <div className="flex container mx-auto">
          <div className="flex-1" />
          <CloseButton onClick={() => {
            router.back();
          }}
          />
        </div>
        <ProjectDetail
          slug={slug}
          {...detail}
        />
      </article>
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
