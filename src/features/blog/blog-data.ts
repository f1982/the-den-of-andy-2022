import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

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
export function getPostBySlug(slug, fields: any[]) {
  // slug is the folder name
  // could add a zh-cn.md to contain other language content
  const fullPath = join(BLOG_POST_DIRECTORY, `${slug}/index.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

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
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      postItem.slug = slug
    }
    if (field === 'content') {
      postItem.content = content
    }
    // all the props written in the md file
    if (typeof data[field] !== 'undefined') {
      //@ts-ignore
      postItem[field] = data[field]
    }
  })

  return postItem
}

// test page only can be accessed by directly input the url
// http://localhost:3000/blog/test-post-with-all-kinds-of-format
const TEST_BLOG_POST = 'test-post-with-all-kinds-of-format'

export function getAllPosts(fields: any[], count: number = -1) {
  const folders = fs.readdirSync(BLOG_POST_DIRECTORY)
  const posts = folders
    .filter((item) => isFolder(item))
    .map((slug) => getPostBySlug(slug, fields))
    .filter((item) => item.slug !== TEST_BLOG_POST)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts.splice(0, count > 0 ? count : posts.length)
}
