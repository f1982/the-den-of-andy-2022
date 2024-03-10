import PageTitle from '../../../../components/organisms/blocks/PageTitle'
import PageHero from '../../../../components/page/hero-image'
import ProjectList from '../../../../features/project/components/ProjectList'
import { getProjects } from '../../../../features/project/utils/project-helper'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  // const router = useRouter()
  // let { type } = router.query
  // const params = useSearchParams()
  const t = await getTranslations('project')
  const type = 'coding'

  const projects = await getProjects()

  return (
    <>
      {/* <TabTitle pageTitle={t('pageTitle')} /> */}
      <PageHero image="/static/images/cartoon-rocket.png" />
      <div className="container mx-auto">
        <PageTitle title={t('headline')} description={t('intro')} />
        <ProjectList list={projects} type={type as string} />
      </div>
    </>
  )
}
