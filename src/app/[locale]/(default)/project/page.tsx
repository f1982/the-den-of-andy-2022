import PageRows from '@/components/atoms/page-rows'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'
import ProjectList from '@/features/project/components/project-list'
import { getProjects } from '@/features/project/utils/project-helper'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  // const router = useRouter()
  // let { type } = router.query
  // const params = useSearchParams()
  const t = await getTranslations('project')
  const type = 'coding'

  const projects = await getProjects()

  return (
    <PageRows withMargin>
      <PageHero image="/static/images/cartoon-rocket.png" />
      <div className="mx-6">
        <div className="container">
          <PageTitle title={t('headline')} description={t('intro')} />
        </div>
        <ProjectList list={projects} type={type as string} />
      </div>
    </PageRows>
  )
}
