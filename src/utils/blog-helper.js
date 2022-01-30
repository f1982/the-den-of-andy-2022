import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const BLOG_POST_DIRECTORY = join(process.cwd(), 'public/blog');

/**
 * list all the blog post *.md files
 * @returns array of file names
 */
export function getPostSlugs() {
  const files = fs.readdirSync(BLOG_POST_DIRECTORY);
  return files;
}

function getExtension(filename) {
  return filename.split('.').pop();
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(BLOG_POST_DIRECTORY, `${realSlug}.md`);
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

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((item) => getExtension(item) === 'md')
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
