export type AuthorData = {
  name: string;
  picture: string;
}

export type BlogPostData = {
  title: string
  coverImage: string
  date: string
  author: AuthorData
  content: string
  slug: string
}

export type PostMap = {
  [key:string]: BlogPostData
}