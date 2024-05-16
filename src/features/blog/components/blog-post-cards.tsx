import BlogPostItemView from './blog-post-item'
import CardGrid from '@/components/atoms/card-grid'
import { BLOG_PATH } from '@/config/menu-data'
import { BlogPostData } from '@/features/blog/blog-types'
import React from 'react'

interface Props {
  posts: BlogPostData[]
}

const BlogPosCards: React.FC<Props> = ({ posts }) => (
  <CardGrid>
    {posts.map((post) => (
      <BlogPostItemView
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
