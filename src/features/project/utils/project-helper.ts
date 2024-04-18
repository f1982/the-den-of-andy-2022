import { projectDataPath } from '../project-data'
import fs from 'fs'

export function getProjects() {
  const fileContents = fs.readFileSync(projectDataPath, 'utf8')
  const json = JSON.parse(fileContents)
  return json.data.projects
}

export function getProjectDetail(slug: string) {
  const projects = getProjects()
  return projects.find((item) => item.id === slug)
}
