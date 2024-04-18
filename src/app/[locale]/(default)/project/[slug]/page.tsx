import ProjectDetail from '@/features/project/components/project-post'
import {
  getProjectDetail,
  getProjects,
} from '@/features/project/utils/project-helper'
import { unstable_setRequestLocale } from 'next-intl/server'

export function generateStaticParams() {
  const posts = getProjects()
  const slugs = posts.map((p) => ({
    slug: p.id,
  }))

  console.log('slugs', slugs)
  return slugs
}

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  // unstable_setRequestLocale(params.locale)
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
