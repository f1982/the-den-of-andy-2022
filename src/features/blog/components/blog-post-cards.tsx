import React from 'react'

import CardGrid from '@/components/atoms/card-grid'

import { BlogPostData } from '@/features/blog/blog-types'

import { BLOG_PATH } from '@/config/menu-data'

import BlogPostCardView from './blog-post-card-view'

interface Props {
  posts: Pick<
    BlogPostData,
    'slug' | 'title' | 'date' | 'coverImage' | 'excerpt'
  >[]
}

const BlogPosCards: React.FC<Props> = ({ posts }) => (
  <CardGrid>
    {posts.map((post) => (
      <BlogPostCardView
        key={post.slug}
        title={post.title}
        imageUrl={post.coverImage}
        date={post.date}
        url={`${BLOG_PATH}/${post.slug}`}
      />
    ))}
  </CardGrid>
)

export default BlogPosCards
