import React from 'react'

import CardGrid from '@/components/shared/card-grid'

import { BlogPostData } from '@/features/blog/blog-types'

import { BLOG_PATH } from '@/config/menu-data'
import { localizedPath } from '@/utils/locale-path'

import BlogPostCardView from './blog-post-card-view'

interface Props {
  posts: Pick<
    BlogPostData,
    'slug' | 'title' | 'date' | 'coverImage' | 'excerpt'
  >[]
  locale: string
}

const BlogPosCards: React.FC<Props> = ({ posts, locale }) => (
  <CardGrid>
    {posts.map((post) => (
      <BlogPostCardView
        key={post.slug}
        title={post.title}
        imageUrl={post.coverImage}
        date={post.date}
        url={localizedPath(locale, `${BLOG_PATH}/${post.slug}`)}
      />
    ))}
  </CardGrid>
)

export default BlogPosCards
