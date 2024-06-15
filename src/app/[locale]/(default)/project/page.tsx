import { Suspense } from 'react'

import PageRows from '@/components/atoms/page-rows'
import Spinner from '@/components/atoms/spinner'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import ProjectCardsView from '@/features/project/components/project-cards-view'
import { getProjects } from '@/features/project/project-data'

import { getDictionary } from '../../dictionaries'

async function ProjectList() {
  const projects = getProjects()
  return <ProjectCardsView data={projects} />
}

export default async function Page({ params: { locale } }) {
  const dict = await getDictionary(locale)
  return (
    <PageRows withMargin>
      <PageHero image="/static/images/Web_development--5ec7b8ad01d0360018d4d49b.png" />

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
