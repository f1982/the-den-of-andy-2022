import { ProjectItemData } from '../../../../../types/projects'
import ProjectDetail from '../../../../../features/project/components/ProjectDetail'
import { getProjectDetail } from '../../../../../features/project/utils/project-helper'
// import { useRouter } from 'next/navigation'
import React from 'react'

interface ProjectPageProps {
  detail: ProjectItemData
}

// type ProjectPageType = React.FC<ProjectPageProps> & {
//   getLayout: (page: React.ReactNode) => React.ReactNode
// }

export default async function Page({
  params,
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
        <div className="container mx-auto mt-8 flex">
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
