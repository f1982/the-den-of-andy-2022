import Spinner from '@/components/atoms/spinner'
import ProjectDetailView from '@/features/project/components/project-detail-view'
import {
  getProjectDetail,
  getProjects,
} from '@/features/project/utils/project-helper'
import { delay } from '@/utils/utils'
import { Suspense } from 'react'

export function generateStaticParams() {
  const posts = getProjects()
  const slugs = posts.map((p) => ({
    slug: p.id,
  }))

  return slugs
}

async function PageDetail({ slug }: { slug: string }) {
  const detail = await getProjectDetail(slug)
  return <ProjectDetailView {...detail} />
}

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  return (
    <>
      <article className="mb-32">
        <div className="container mx-auto mt-8 flex">
          <div className="flex-1" />
        </div>
        <Suspense fallback={<Spinner />}>
          <PageDetail slug={params.slug} />
        </Suspense>
      </article>
    </>
  )
}
