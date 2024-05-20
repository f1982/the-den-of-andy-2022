import { format, parseISO } from 'date-fns'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { BlogPostData } from './blog-types'

export const BLOG_POST_DIRECTORY = join(process.cwd(), 'src/content/posts')

function isFolder(filename) {
  return filename.indexOf('.') === -1
}

/**
 * get a single post info from md file and the folder name
 *
 * @param slug
 * @param fields the data hash of single post
 * @returns
 */
export function getPostBySlug(slug): BlogPostData | null {
  // slug is the folder name
  // could add a zh-cn.md to contain other language content
  const fullPath = join(BLOG_POST_DIRECTORY, `${slug}/index.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const postItem: BlogPostData = {
    slug: slug,
    title: data['title'],
    excerpt: data['excerpt'],
    keywords: data['keywords'],
    author: {
      name: data['author']['name'],
      picture: data['author']['picture'],
    },
    content: content,
    coverImage: data['coverImage'],
    date: data['date'],
  }
  return postItem
}

// test page only can be accessed by directly input the url
// http://localhost:3000/blog/test-post-with-all-kinds-of-format
const TEST_BLOG_POST = 'test-post-with-all-kinds-of-format'

function parseDate(dateStr: string) {
  const date = parseISO(dateStr)
  return format(date, 'LLLL d, yyyy')
}

export function getAllPosts(count: number = -1) {
  const folders = fs.readdirSync(BLOG_POST_DIRECTORY)
  const posts = folders
    .filter((item) => isFolder(item))
    .map((slug) => getPostBySlug(slug))
    .filter((item) => Boolean(item))
    .filter((item) => item?.slug !== TEST_BLOG_POST)
    .sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1))
    .map((p) => ({ ...p, date: parseDate(p!.date) }) as BlogPostData)

  return posts.splice(0, count > 0 ? count : posts.length)
}
