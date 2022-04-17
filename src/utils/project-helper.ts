import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { ProjectItemData } from '../types/projects';

const PROJECTS_DATA = join(process.cwd(), 'public/static/projects.json');
const PROJ_POST_DIRECTORY = join(process.cwd(), 'public/static/projects');

export function getProjects() {
  const fullPath = join(PROJECTS_DATA);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const json = JSON.parse(fileContents);
  return json.data;
}

export function getProjectDetail(slug) {
  const { projects } = getProjects();
  return projects.find((item) => item.id === slug);
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