
// import Project from './Project'

import Link from "next/link"

const Projects = [
  {
    name:'project 1',
    link:'proj1'
  },
  {
    name: 'proj2',
    link:'proj2'
  }
]
const ProjectList = () => {
  return <div>
    <h1>project list page</h1>
    {Projects.map(item=>{
      return <div key={item.name} >
        <Link href={'/project/'+item.link} passHref>
          <a>{item.name}</a>
        </Link>
      </div>
    })}
  </div>
}

export default ProjectList;