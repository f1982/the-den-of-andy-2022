import fs from 'fs'
import { join } from 'path'

export const PROJECT_IMAGE_URL = '/static/images/project'
export const projectDataPath = join(process.cwd(), 'src/content/projects.json')

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
