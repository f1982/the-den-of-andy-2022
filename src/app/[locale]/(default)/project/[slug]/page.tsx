import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleProp, PageSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'

import Spinner from '@/components/atoms/spinner'

import ProjectDetailView from '@/features/project/components/project-detail-view'
import { getProjectDetail, getProjects } from '@/features/project/project-data'

import { getLocalPrefix } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

export function generateStaticParams() {
  const posts = getProjects()
  const slugs = posts.map((p) => ({
    slug: p.id,
  }))

  return slugs
}

export async function generateMetadata({
  params: { locale, slug },
}: PageLocaleProp & PageSlugProp): Promise<Metadata> {
  const detail = getProjectDetail(slug)
  return {
    ...siteMetadata,
    title: detail?.title,
    description: detail?.description.slice(0, 160),
    alternates: {
      canonical: getLocalPrefix(locale) + '/project/' + detail?.id,
    },
  }
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
