import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'

import Spinner from '@/components/shared/spinner'

import ProjectDetailView from '@/features/project/components/project-detail-view'
import { getProjectDetail, getProjects } from '@/features/project/project-data'

import { getLocalPrefix } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

export async function generateStaticParams() {
  const posts = await getProjects()
  const slugs = posts?.map((p) => ({
    slug: p.id,
  }))

  return slugs
}

export async function generateMetadata(props: PageLocaleSlugProp): Promise<Metadata> {
  const params = await props.params;

  const {
    locale,
    slug
  } = params;

  const detail = await getProjectDetail(slug)
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
  const detail = await getProjectDetail(slug)

  if (!detail) {
    return notFound()
  }
  return <ProjectDetailView {...detail} />
}

export default async function Page(
  props: {
    params: Promise<{ slug: string; locale: string }>
  }
) {
  const params = await props.params;
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
