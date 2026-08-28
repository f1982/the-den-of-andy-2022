import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'

import Spinner from '@/components/shared/spinner'

import ProjectDetailView from '@/features/project/components/project-detail-view'
import { getProjectDetail, getProjects } from '@/features/project/project-data'

import { getPageMetadata, truncateMetaDescription } from '@/utils/metadata-utils'
import SchemaJsonLd from '@/utils/schema-jsonld'
import { getJsonLdBreadcrumb } from '@/utils/schema-json-utils'
import { siteSettings, siteUrl } from '@/config/site-config'

// Only serve slugs known at build time; any other slug returns a clean 404
// instead of being rendered dynamically (avoids soft-404s in Search Console).
export const dynamicParams = false

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
  if (!detail) {
    return { title: 'Project not found', robots: { index: false, follow: false } }
  }
  return {
    ...getPageMetadata({
      locale,
      path: `/project/${detail.id}`,
      title: `${detail.title} | ${siteSettings.name}`,
      description: truncateMetaDescription(detail.description),
      keywords: detail.tech,
      image: detail.cover,
    }),
  }
}

export default async function Page(
  props: {
    params: Promise<{ slug: string; locale: string }>
  }
) {
  const params = await props.params;
  const detail = await getProjectDetail(params.slug)
  if (!detail) return notFound()

  const projectUrl = `${siteUrl}/${params.locale}/project/${detail.id}`
  return (
    <>
      <SchemaJsonLd
        jsonLd={getJsonLdBreadcrumb([
          { name: 'Home', url: `${siteUrl}/${params.locale}` },
          { name: 'Projects', url: `${siteUrl}/${params.locale}/project` },
          { name: detail.title, url: projectUrl },
        ])}
      />
      <article className="mb-32">
        <div className="container mx-auto mt-8 flex">
          <div className="flex-1" />
        </div>
        <Suspense fallback={<Spinner />}>
          <ProjectDetailView {...detail} />
        </Suspense>
      </article>
    </>
  )
}
