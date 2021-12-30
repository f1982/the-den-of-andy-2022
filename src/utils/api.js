import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'public/blog');
const projectJSONfile = join(process.cwd(), 'public/projects/all.json');

// @refresh reset

export function getPostSlugs() {
  const files = fs.readdirSync(postsDirectory);
  // console.log('files', files);
  return files;
}

export function getProjects() {
  const fullPath = join(projectJSONfile);
  // console.log('fullPath', fullPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // console.log('fileContents', fileContents.projects);
  const json = JSON.parse(fileContents);
  // console.log('projects: ', json.projects);
  return json.data;
}

export function getProjectDetail(slug) {
  console.log('getProjectDetail');
  const { projects } = getProjects();
  console.log('projects', projects);
  return projects.find((item) => item.id === slug);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

function getExtension(filename) {
  return filename.split('.').pop();
}
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((item) => getExtension(item) === 'md')
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
