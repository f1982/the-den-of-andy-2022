import { ProjectItemData } from '../../../types/projects'
import ProjectItem from './ProjectItem'
import cn from 'classnames'
import React from 'react'

interface ProjectListProps {
  list: ProjectItemData[]
  type: string
}

const ProjectList: React.FC<ProjectListProps> = ({ list, type = '' }) => {
  console.log('list', list)
  return (
    <section>
      <div
        className={cn(
          'grid grid-cols-1',
          'md:grid-cols-2',
          'gap-x-16',
          'gap-y-16',
          'mb-16',
        )}>
        {type
          ? list
              .filter((item) => item.type === type)
              .map((item) => <ProjectItem key={item.id} {...item} />)
          : list.map((item) => <ProjectItem key={item.id} {...item} />)}
      </div>
    </section>
  )
}

export default ProjectList
