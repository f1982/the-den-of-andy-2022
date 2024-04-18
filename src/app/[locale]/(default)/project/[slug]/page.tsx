import ProjectDetail from '@/features/project/components/project-post'
import { getProjectDetail } from '@/features/project/utils/project-helper'

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  const detail = getProjectDetail(params.slug)

  return (
    <>
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
