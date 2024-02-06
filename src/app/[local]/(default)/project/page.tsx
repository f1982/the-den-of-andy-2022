import PageHero from '../../../../../src-backup/components/organisms/blocks/PageHero'
import PageTitle from '../../../../../src-backup/components/organisms/blocks/PageTitle'
import ProjectList from '../../../../../src-backup/features/Project/ProjectList'
import { getProjects } from '../../../../../src-backup/features/Project/project-helper'
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
