import { useTranslations } from 'next-intl'
import PageTitle from '../../../../components/organisms/blocks/PageTitle'
import PageHero from '../../../../components/page/PageHero'
import ProjectList from './_lib/ProjectList'
import { getProjects } from './_lib/project-helper'

export default async function Page() {
  // const router = useRouter()
  // let { type } = router.query
  // const params = useSearchParams()
  const t = useTranslations('project')
  const type = 'coding'

  const projects = await getProjects()
  console.log('projects', projects)

  return (
    <>
      {/* <TabTitle pageTitle={t('pageTitle')} /> */}
      <PageHero image="/static/images/cartoon-rocket.png" />
      <div className="container mx-auto">
        <PageTitle
          title={t('headline')}
          description={t('intro')}
        />
        <ProjectList list={projects} type={type as string} />
      </div>
    </>
  )
}

