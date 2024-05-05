import ProjectItemView from './project-item-view'
import CardGrid from '@/components/atoms/card-grid'
import { ProjectItemData } from '@/features/project/project-types'
import React from 'react'

interface ProjectListProps {
  data: ProjectItemData[]
}

const ProjectListView: React.FC<ProjectListProps> = ({ data }) => {
  return (
    <CardGrid>
      {data.map((item) => (
        <ProjectItemView key={item.id} {...item} />
      ))}
    </CardGrid>
  )
}

export default ProjectListView
