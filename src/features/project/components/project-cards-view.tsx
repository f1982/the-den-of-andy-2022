import React from 'react'

import CardGrid from '@/components/shared/card-grid'

import { ProjectItemData } from '@/features/project/project-types'

import ProjectCardView from './project-card-view'
import { localizedPath } from '@/utils/locale-path'

interface ProjectListProps {
  data: ProjectItemData[]
  locale: string
}

const ProjectCardsView: React.FC<ProjectListProps> = ({ data, locale }) => {
  return (
    <CardGrid>
      {data.map((item) => (
        <ProjectCardView
          key={item.id}
          cover={item.cover}
          start={item.start}
          title={item.title}
          platform={item.platform}
          url={localizedPath(locale, `/project/${item.id}`)}
        />
      ))}
    </CardGrid>
  )
}

export default ProjectCardsView
