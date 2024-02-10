import { join } from 'path'

export const PROJECTS_DATA = join(process.cwd(), '/data/projects.json')
export const PROJ_POST_DIRECTORY = join(
  process.cwd(),
  'src-backup/data/projects',
)

export const BLOG_POST_DIRECTORY = join(process.cwd(), '/data/posts')
