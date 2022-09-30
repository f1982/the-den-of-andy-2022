import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { BlogPostData, PostMap } from '../types/blog';

const BLOG_POST_DIRECTORY = join(process.cwd(), 'public/static/posts');

/**
 * list all the blog post folders
 * @returns array of file names
 */
export function getAllPostFolders() {
  const files = fs.readdirSync(BLOG_POST_DIRECTORY);
  return files;
}

function getExtension(filename) {
  return filename.split('.').pop();
}

function isFolder(filename) {
  return filename.indexOf('.') === -1;
}

/**
 * get a single post info from md file and the folder name
 *
 * @param slug
 * @param fields the data hash of single post
 * @returns
 */
export function getPostBySlug(slug, fields = []) {
  // slug is the folder name
  // could add a zh-cn.md to contain other language content
  const fullPath = join(BLOG_POST_DIRECTORY, `${slug}/index.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const postItem: BlogPostData = {
    slug: '',
    title: '',
    excerpt: '',
    keywords: '',
    author: {
      name: '',
      picture: '',
    },
    content: '',
    coverImage: '',
    date: '',
  };

  fields.forEach((field) => {
    if (field === 'slug') {
      postItem.slug = slug;
    }
    if (field === 'content') {
      postItem.content = content;
    }
    // all the props written in the md file
    if (typeof data[field] !== 'undefined') {
      postItem[field] = data[field];
    }
  });

  return postItem;
}

export function getAllPosts(fields = []) {
  const folders = getAllPostFolders();
  const posts = folders
    .filter((item) => isFolder(item))
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
