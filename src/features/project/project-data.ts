import { projectDataPath } from './project-types'
import { PROJECT_IMAGE_URL } from '@/config/site-config'
import fs from 'fs'

export function getProjects() {
  const fileContents = fs.readFileSync(projectDataPath, 'utf8')
  const json = JSON.parse(fileContents)
  const pjs = json.data.projects
  return pjs.map((p) => {
    return {
      ...p,
      cover: PROJECT_IMAGE_URL + '/' + p.cover,
      images: p.images.map((i) => PROJECT_IMAGE_URL + '/' + i),
    }
  })
}

export function getProjectDetail(slug: string) {
  const projects = getProjects()
  const pj = projects.find((item) => item.id === slug)
  return pj
}
