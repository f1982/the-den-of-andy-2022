import fs from 'fs'
import { join } from 'path'

import { cdnUrl } from '@/config/site-config'

import { ProjectItemData } from './project-types'

export const projectDataPath = join(process.cwd(), 'src/content/projects.json')

export const projectImageUrl = cdnUrl + '/projects'

export function getProjects() {
  const fileContents = fs.readFileSync(projectDataPath, 'utf8')
  const json = JSON.parse(fileContents)
  const pjs: ProjectItemData[] = json.data.projects
  return pjs.map((p) => {
    return {
      ...p,
      cover: projectImageUrl + '/' + p.cover,
      images: p.images.map((i) => projectImageUrl + '/' + i),
    }
  })
}

export function getProjectDetail(slug: string) {
  const projects = getProjects()
  const pj = projects.find((item) => item.id === slug)
  return pj
}
