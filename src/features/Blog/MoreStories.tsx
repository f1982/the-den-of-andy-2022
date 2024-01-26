import React from 'react';
import { BlogPostData } from '../../types/blog';

import PostPreview from './PostPreview';

// test page only can be accessed by directly input the url
// http://localhost:3000/blog/test-post-with-all-kinds-of-format
export const TEST_BLOG_POST = 'test-post-with-all-kinds-of-format';

interface MoreStoriesProps {
  posts: BlogPostData[];
}

const MoreStories: React.FC<MoreStoriesProps> = ({ posts }) => (
  <section>
    <div
      className="
      grid grid-cols-1
      md:grid-cols-2
      gap-x-16
      gap-y-16
      mb-16
      mx-2 md:mx-auto"
    >
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
              excerpt={post.excerpt}
            />
          )
      )}
    </div>
  </section>
);

export default MoreStories;
