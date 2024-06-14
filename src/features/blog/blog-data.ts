import { format, parseISO } from 'date-fns'
import fs from 'fs'
import matter from 'gray-matter'
import { orderBy } from 'lodash'
import { join } from 'path'

import markdownToHtml from '@/utils/markdownToHtml'

import { BlogPostData } from './blog-types'

const BLOG_POST_DIRECTORY = join(process.cwd(), 'src/content/posts')

// test page only can be accessed by directly input the url
// http://localhost:3000/blog/test-post-with-all-kinds-of-format
const TEST_BLOG_POST = 'test-post-with-all-kinds-of-format'

function isFolder(filename: string) {
  return filename.indexOf('.') === -1
}

/**
 * get a single post info from md file and the folder name
 */
export async function getPostDetail(slug: string) {
  // slug is the folder name
  // could add a zh-cn.md to contain other language content
  const fullPath = join(BLOG_POST_DIRECTORY, `${slug}/index.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const htmlContent = await markdownToHtml(content)
  // console.log('htmlContent', htmlContent)

  const postItem: BlogPostData = {
    slug: slug,
    title: data['title'],
    excerpt: data['excerpt'],
    keywords: data['keywords'],
    author: {
      name: data['author']['name'],
      picture: data['author']['picture'],
    },
    content: htmlContent,
    coverImage: data['coverImage'],
    date: data['date'],
  }
  return postItem
}

function parseDate(dateStr: string) {
  const date = parseISO(dateStr)
  return format(date, 'LLLL d, yyyy')
}

export async function getPosts(count: number = -1) {
  const folders = fs.readdirSync(BLOG_POST_DIRECTORY)
  const postFolders = folders.filter((item) => isFolder(item))

  let posts: BlogPostData[] = (
    await Promise.all(
      postFolders.map(async (slug) => {
        return await getPostDetail(slug)
      }),
    )
  ).filter((item): item is BlogPostData => item !== null)

  posts = orderBy(posts, (post) => new Date(post.date).getTime(), 'desc')
  posts
    .filter((item) => item?.slug !== TEST_BLOG_POST)
    .filter((item) => item as BlogPostData)

  return posts.splice(0, count > 0 ? count : posts.length)
}
