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
  /** Language of the text; 'en' when a locale has no translation yet. */
  contentLocale: string
}

export type PostMap = {
  [key: string]: BlogPostData
}
