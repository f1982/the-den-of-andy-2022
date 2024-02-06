import ProjectDetail from '../../../../../../src-backup/features/Project/ProjectDetail'
import { getProjectDetail } from '../../../../../../src-backup/features/Project/project-helper'
import { ProjectItemData } from '../../../../../../src-backup/types/projects'
// import { useRouter } from 'next/navigation'
import React from 'react'

interface ProjectPageProps {
  detail: ProjectItemData
}

// type ProjectPageType = React.FC<ProjectPageProps> & {
//   getLayout: (page: React.ReactNode) => React.ReactNode
// }

export default async function Page({
  params
}: {
  params: { slug: string; locale: string }
}) {
  console.log('params', params)
  // const router = useRouter()
  // const pageURL = usePageURL()

  // const handleClose = () => {
  //   router.push('/project')
  // }
  const detail = getProjectDetail(params.slug)

  return (
    <>
      {/* <NextSeo
        title={detail.title}
        additionalMetaTags={[
          { name: 'keywords', content: detail.tech } // keywords metadata
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
              alt: `Photo of ${detail.title}`
            }
          ]
        }}
      /> */}
      <article className="mb-32">
        <div className="flex container mx-auto mt-8">
          <div className="flex-1" />
          {/* <CloseButton onClick={handleClose} /> */}
        </div>
        <ProjectDetail {...detail} />
      </article>
    </>
  )
}

// ProjectPage.getLayout = function getLayout(page) {
//   return <div>{page}</div>
// }

// export async function getStaticProps({ params }) {
//   return {
//     props: { detail }
//   }
// }

// export async function getStaticPaths() {
//   const { projects } = getProjects()
//   return {
//     paths: projects.map((post) => ({
//       params: {
//         slug: post.id
//       }
//     })),
//     fallback: false
//   }
// }

// export default ProjectPage
