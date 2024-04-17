import { BlogPostData } from '../../../types/blog'
import PostPreview from './blog-post-item'
import React from 'react'

// test page only can be accessed by directly input the url
// http://localhost:3000/blog/test-post-with-all-kinds-of-format
export const TEST_BLOG_POST = 'test-post-with-all-kinds-of-format'

interface Props {
  posts: BlogPostData[]
}

const BlogPosCards: React.FC<Props> = ({ posts }) => (
  <section>
    <div
      className="
      mx-2 mb-16
      grid
      grid-cols-1
      gap-x-16
      gap-y-16
      md:mx-auto md:grid-cols-2">
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
    </div>
  </section>
)

export default BlogPosCards
