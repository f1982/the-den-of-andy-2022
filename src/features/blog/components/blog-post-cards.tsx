import React from 'react'

import CardGrid from '@/components/shared/card-grid'

import { postPath } from '@/features/blog/blog-data'
import { BlogPostData } from '@/features/blog/blog-types'

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
        url={postPath(post.slug, locale)}
      />
    ))}
  </CardGrid>
)

export default BlogPosCards
