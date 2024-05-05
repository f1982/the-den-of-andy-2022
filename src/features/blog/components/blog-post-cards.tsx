import PostPreview from './blog-post-item'
import CardGrid from '@/components/atoms/card-grid'
import { BlogPostData } from '@/features/blog/blog-types'
import React from 'react'

interface Props {
  posts: BlogPostData[]
}

const BlogPosCards: React.FC<Props> = ({ posts }) => (
  <CardGrid>
    {posts.map((post) => (
      <PostPreview
        key={post.slug}
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
        slug={post.slug}
      />
    ))}
  </CardGrid>
)

export default BlogPosCards
