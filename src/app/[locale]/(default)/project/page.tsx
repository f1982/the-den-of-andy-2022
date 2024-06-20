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

import { getLocalPrefix } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

import HeroImage from '@/assets/images/project-hero-rocket.png'

export async function generateMetadata({
  params: { locale },
}: PageLocaleProp): Promise<Metadata> {
  return {
    ...siteMetadata,
    title: 'Projects',
    description: 'Projects',
    alternates: {
      canonical: getLocalPrefix(locale) + '/project',
    },
  }
}

async function ProjectList() {
  const projects = getProjects()
  if (projects.length < 1) {
    return <div className="text-center">No projects yet</div>
  }
  return <ProjectCardsView data={projects} />
}

export default async function Page({ params: { locale } }) {
  const dict = await getDictionary(locale)
  return (
    <PageRows withMargin>
      <PageHero image={HeroImage} />
      <div>
        <div className="container">
          <PageTitle
            title={dict.project.headline}
            description={dict.project.intro}
          />
        </div>

        <div className="mx-4">
          <Suspense fallback={<Spinner />}>
            <ProjectList />
          </Suspense>
        </div>
      </div>
    </PageRows>
  )
}
