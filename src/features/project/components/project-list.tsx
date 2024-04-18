import ProjectItem from './project-item'
import CardGrid from '@/components/atoms/card-grid'
import { ProjectItemData } from '@/features/project/project-data'
import React from 'react'

interface ProjectListProps {
  list: ProjectItemData[]
  type: string
}

const ProjectList: React.FC<ProjectListProps> = ({ list, type = '' }) => {
  return (
    <CardGrid>
      {type
        ? list
            .filter((item) => item.type === type)
            .map((item) => <ProjectItem key={item.id} {...item} />)
        : list.map((item) => <ProjectItem key={item.id} {...item} />)}
    </CardGrid>
  )
}

export default ProjectList
