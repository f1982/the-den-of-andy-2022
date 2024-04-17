import { BlogPostData } from '../../../types/blog'
import PostPreview from './blog-post-item'
import CardGrid from '@/components/atoms/card-grid'
import React from 'react'

// test page only can be accessed by directly input the url
// http://localhost:3000/blog/test-post-with-all-kinds-of-format
export const TEST_BLOG_POST = 'test-post-with-all-kinds-of-format'

interface Props {
  posts: BlogPostData[]
}

const BlogPosCards: React.FC<Props> = ({ posts }) => (
  <CardGrid>
    {posts.map(
      (post) =>
        post.slug !== TEST_BLOG_POST && (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ),
    )}
  </CardGrid>
)

export default BlogPosCards
