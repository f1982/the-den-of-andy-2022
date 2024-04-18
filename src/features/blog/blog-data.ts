import { join } from 'path'

export type AuthorData = {
  name: string
  picture: string
}

export type BlogPostData = {
  title: string
  excerpt: string
  coverImage: string
  date: string
  author: AuthorData
  content: string
  slug: string
  keywords: string
}

export type PostMap = {
  [key: string]: BlogPostData
}

export const BLOG_POST_DIRECTORY = join(process.cwd(), '/data/posts')
