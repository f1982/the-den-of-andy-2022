import { Suspense } from 'react'

import { getTranslations } from 'next-intl/server'

import PageRows from '@/components/atoms/page-rows'
import Spinner from '@/components/atoms/spinner'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import ProjectListView from '@/features/project/components/project-list-view'
import { getProjects } from '@/features/project/project-data'

async function ProjectList() {
  const projects = await getProjects()
  return <ProjectListView data={projects} />
}

export default async function Page() {
  const t = await getTranslations('project')
  return (
    <PageRows withMargin>
      <PageHero image="/static/images/Web_development--5ec7b8ad01d0360018d4d49b.png" />

      <div>
        <div className="container">
          <PageTitle title={t('headline')} description={t('intro')} />
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
