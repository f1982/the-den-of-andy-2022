import PageTitle from '../../../../components/organisms/blocks/PageTitle'
import PageHero from '../../../../components/page/PageHero'
import ProjectList from './_lib/ProjectList'
import { getProjects } from './_lib/project-helper'
import { t } from 'i18next'
import { useRouter, useSearchParams } from 'next/navigation'

const Projects = async ({ params }: { params: { type: string } }) => {
  // const router = useRouter()
  // let { type } = router.query
  // const params = useSearchParams()
  const type = params.type || 'coding'

  const projects = await getProjects()
  console.log('projects', projects)

  return (
    <>
      {/* <TabTitle pageTitle={t('project.pageTitle')} /> */}
      <PageHero image="/static/images/cartoon-rocket.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle
          title={t('project.headline')}
          description={t('project.intro')}
        />
        {/* project list */}
        <ProjectList list={projects} type={type as string} />
      </div>
    </>
  )
}

export default Projects
