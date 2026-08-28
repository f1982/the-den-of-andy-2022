import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'

import PageHero from '@/components/sections/hero-image'
import PageTitle from '@/components/sections/page-title'
import PageRows from '@/components/shared/page-rows'
import Spinner from '@/components/shared/spinner'

import ProjectCardsView from '@/features/project/components/project-cards-view'
import { getProjects } from '@/features/project/project-data'

import { getPageMetadata, truncateMetaDescription } from '@/utils/metadata-utils'
import { siteSettings } from '@/config/site-config'

import HeroImage from '@/assets/images/project-hero-rocket.png'

export async function generateMetadata(props: PageLocaleProp): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)
  return getPageMetadata({
    locale,
    path: '/project',
    title: `${dict.project.headline} by Andy Cao | ${siteSettings.name}`,
    description: truncateMetaDescription(dict.project.intro),
    keywords: siteSettings.keywords,
  })
}

async function ProjectList({ locale }: { locale: string }) {
  const projects = await getProjects()
  if (projects?.length < 1) {
    return <div className="text-center">No projects yet</div>
  }
  return <ProjectCardsView data={projects} locale={locale} />
}

export default async function Page(props) {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)
  return (
    <PageRows withMargin>
      <PageHero image={HeroImage} alt="Rocket project illustration" />
      <div>
        <div className="container">
          <PageTitle
            title={dict.project.headline}
            description={dict.project.intro}
          />
        </div>

        <div className="mx-4">
          <Suspense fallback={<Spinner />}>
            <ProjectList locale={locale} />
          </Suspense>
        </div>
      </div>
    </PageRows>
  )
}
