import { useRouter } from 'next/router'

import ProjectDetail from '../../features/Project/Project'


const ProjectPage = ()=>{
  const router = useRouter()
  const {slug} = router.query
  console.log('slug', slug);
  return <div>
    <h2>project detail page</h2>
    <ProjectDetail slug={slug} title='title test' description='description test' />
  </div>
}

export default ProjectPage;
