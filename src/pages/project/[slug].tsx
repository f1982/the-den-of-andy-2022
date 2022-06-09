import { useRouter } from 'next/router';
import Modal from 'react-modal';
import CloseButton from '../../components/atoms/buttons/CloseButton';
import customModalStyles from '../../constants/modelConfig';
import ProjectDetail from '../../features/Project/ProjectDetail';
import { ProjectItemData } from '../../types/projects';
import { getProjectDetail, getProjects } from '../../utils/project-helper';

function ProjectPage({ detail }: { detail: ProjectItemData }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Modal
      isOpen
      onRequestClose={() => router.back()}
      style={customModalStyles}
      contentLabel="Post modal"
    >
      <article className="mb-32">
        <div className="flex container mx-auto mt-8">
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

ProjectPage.getLayout = function getLayout(page) {
  return (
    <div>
      {page}
    </div>
  );
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
