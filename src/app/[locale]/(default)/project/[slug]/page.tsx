import { Metadata } from 'next'

import { PageLocaleSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'

import { getDictionary } from '@/utils/dictionaries'
import { localizedPath } from '@/utils/locale-path'
import {
  getPageMetadata,
  truncateMetaDescription,
} from '@/utils/metadata-utils'
import { getJsonLdBreadcrumb } from '@/utils/schema-json-utils'
import SchemaJsonLd from '@/utils/schema-jsonld'

import ProjectDetail from '@/features/project/components/project-detail'
import { getProjectDetail, getProjects } from '@/features/project/project-data'

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

export async function generateMetadata(
  props: PageLocaleSlugProp,
): Promise<Metadata> {
  const params = await props.params

  const { locale, slug } = params

  const detail = await getProjectDetail(slug)
  if (!detail) {
    return {
      title: 'Project not found',
      robots: { index: false, follow: false },
    }
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

export default async function Page(props: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const params = await props.params
  const projects = (await getProjects()) ?? []
  const index = projects.findIndex((p) => p.id === params.slug)
  const detail = projects[index]
  if (!detail) return notFound()

  const dict = await getDictionary(params.locale)
  const projectUrl = `${siteUrl}${localizedPath(params.locale, `/project/${detail.id}`)}`
  return (
    <>
      <SchemaJsonLd
        jsonLd={getJsonLdBreadcrumb([
          { name: 'Home', url: `${siteUrl}${localizedPath(params.locale)}` },
          {
            name: 'Projects',
            url: `${siteUrl}${localizedPath(params.locale, '/project')}`,
          },
          { name: detail.title, url: projectUrl },
        ])}
      />
      <ProjectDetail
        project={detail}
        index={index}
        prev={projects[index - 1]}
        next={projects[index + 1]}
        locale={params.locale}
        copy={dict.den.projects}
      />
    </>
  )
}
