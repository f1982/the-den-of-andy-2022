import fs from 'fs';
import { join } from 'path';

const PROJECTS_DATA = join(process.cwd(), 'public/static/projects.json');

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
