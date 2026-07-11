import { cdnUrl } from '@/config/site-config'

import projectData from '@/content/projects.json'

import { ProjectItemData } from './project-types'

export const projectImageUrl = cdnUrl + '/projects'

export async function getProjects() {
  try {
    // Import the JSON data dynamically
    // const projectsModule = await import('@/content/projects.json')
    // const pjs: ProjectItemData[] = projectsModule?.data?.projects || []
    const pjs: ProjectItemData[] = projectData?.data?.projects
    return pjs.map((p) => {
      return {
        ...p,
        cover: projectImageUrl + '/' + p.cover,
        images: p.images.map((i) => projectImageUrl + '/' + i),
      }
    })
  } catch (error) {
    console.error('Error loading projects:', error)
    return []
  }
}

export async function getProjectDetail(slug: string) {
  const projects = await getProjects()
  return projects?.find((p) => p?.id === slug)
}
