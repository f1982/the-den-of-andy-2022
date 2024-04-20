import PageRows from '@/components/atoms/page-rows'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'
import ProjectList from '@/features/project/components/project-list'
import { getProjects } from '@/features/project/utils/project-helper'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const t = await getTranslations('project')
  const type = 'coding'

  const projects = await getProjects()

  return (
    <PageRows withMargin>
      <PageHero image="/static/images/Web_development--5ec7b8ad01d0360018d4d49b.png" />

      <div>
        <div className="container">
          <PageTitle title={t('headline')} description={t('intro')} />
        </div>

        <div className="mx-4">
          <ProjectList list={projects} type={type as string} />
        </div>
      </div>
    </PageRows>
  )
}
