import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Alert from '../components/alert';

const postsDirectory = join(process.cwd(), 'public/blog')

// @refresh reset

export function getPostSlugs() {
  const files = fs.readdirSync(postsDirectory);
  // console.log('files', files);
  return files
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  console.log('fullPath', fullPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  console.log('fileContents', fileContents);
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

function getExtension(filename) {
  return filename.split('.').pop();
}
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  console.log('slugs', slugs);
  const posts = slugs
    .filter(item => getExtension(item) === "md")
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  console.log('posts', posts);
  return posts
}
