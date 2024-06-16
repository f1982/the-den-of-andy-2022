import { Suspense } from 'react'

import { getDictionary } from '@/utils/dictionaries'

import PageRows from '@/components/atoms/page-rows'
import Spinner from '@/components/atoms/spinner'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import ProjectCardsView from '@/features/project/components/project-cards-view'
import { getProjects } from '@/features/project/project-data'

import RocketImage from '@/assets/images/project-hero-rocket.png'

async function ProjectList() {
  const projects = getProjects()
  return <ProjectCardsView data={projects} />
}

export default async function Page({ params: { locale } }) {
  const dict = await getDictionary(locale)
  return (
    <PageRows withMargin>
      <PageHero image={RocketImage} />
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
