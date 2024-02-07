import { PROJECTS_DATA } from '../../../../../config/server-config'
import fs from 'fs'
import { join } from 'path'

export function getProjects() {
  // const fullPath = join(PROJECTS_DATA)
  console.log('fullPath', PROJECTS_DATA)
  const fileContents = fs.readFileSync(PROJECTS_DATA, 'utf8')
  // const fileContents = require(PROJECTS_DATA)
  console.log('fileContents', fileContents)
  const json = JSON.parse(fileContents)
  return json.data.projects
}

export function getProjectDetail(slug: string) {
  console.log('slug', slug)
  const projects = getProjects()
  console.log('projects', projects)
  return projects.find((item) => item.id === slug)
}

/**
 * get a single post info from md file and the folder name
 *
 * @param slug
 * @param fields the data hash of single post
 * @returns
 */
// export function getProjectExtension(slug, lang = 'en', fields = []) {
//   // slug is the folder name
//   // could add a zh-cn.md to contain other language content
//   const fullPath = join(PROJ_POST_DIRECTORY, `${slug}/${lang}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);

//   const projItem:ProjectItemData = {};

//   projItem.content = content;

//   return projItem;
// }
