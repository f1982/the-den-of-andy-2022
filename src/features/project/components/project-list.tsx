import ProjectItem from './project-item'
import CardGrid from '@/components/atoms/card-grid'
import { ProjectItemData } from '@/features/project/project-data'
import React from 'react'

interface ProjectListProps {
  data: ProjectItemData[]
}

const ProjectListView: React.FC<ProjectListProps> = ({ data }) => {
  return (
    <CardGrid>
      {data.map((item) => (
        <ProjectItem key={item.id} {...item} />
      ))}
    </CardGrid>
  )
}

export default ProjectListView
