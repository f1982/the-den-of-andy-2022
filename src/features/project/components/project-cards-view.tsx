import React from 'react'

import CardGrid from '@/components/atoms/card-grid'

import { ProjectItemData } from '@/features/project/project-types'

import ProjectCardView from './project-card-view'

interface ProjectListProps {
  data: ProjectItemData[]
}

const ProjectCardsView: React.FC<ProjectListProps> = ({ data }) => {
  return (
    <CardGrid>
      {data.map((item) => (
        <ProjectCardView
          key={item.id}
          cover={item.cover}
          start={item.start}
          title={item.title}
          platform={item.platform}
          url={`/project/${item.id}`}
        />
      ))}
    </CardGrid>
  )
}

export default ProjectCardsView
