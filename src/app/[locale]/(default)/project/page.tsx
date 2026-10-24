import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'
import {
  getPageMetadata,
  truncateMetaDescription,
} from '@/utils/metadata-utils'

import ProjectIndex from '@/features/project/components/project-index'
import { getProjects } from '@/features/project/project-data'

import { siteSettings } from '@/config/site-config'

export async function generateMetadata(
  props: PageLocaleProp,
): Promise<Metadata> {
  const { locale } = await props.params

  const dict = await getDictionary(locale)
  return getPageMetadata({
    locale,
    path: '/project',
    title: `${dict.project.headline} by Andy Cao | ${siteSettings.name}`,
    description: truncateMetaDescription(dict.project.intro),
    keywords: siteSettings.keywords,
  })
}

export default async function Page(props: PageLocaleProp) {
  const { locale } = await props.params

  const dict = await getDictionary(locale)
  const projects = (await getProjects()) ?? []

  return (
    <ProjectIndex
      projects={projects}
      locale={locale}
      copy={dict.den.projects}
    />
  )
}
