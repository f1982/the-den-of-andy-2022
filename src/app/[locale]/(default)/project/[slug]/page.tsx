import { Suspense } from 'react'

import { notFound } from 'next/navigation'

import Spinner from '@/components/atoms/spinner'

import ProjectDetailView from '@/features/project/components/project-detail-view'
import { getProjectDetail, getProjects } from '@/features/project/project-data'

export function generateStaticParams() {
  const posts = getProjects()
  const slugs = posts.map((p) => ({
    slug: p.id,
  }))

  return slugs
}

async function PageDetail({ slug }: { slug: string }) {
  const detail = getProjectDetail(slug)

  if (!detail) {
    return notFound()
  }
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
