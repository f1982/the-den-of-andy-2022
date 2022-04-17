import React from 'react';

import PostHeader from './components/PostHeader';
import PostBody from './components/PostBody';
import { BlogPostData } from '../../types/blog';

function BlogPost({ content, ...rest }:BlogPostData) {
  return (
    <article className="mb-32">
      <PostHeader {...rest} />
      <PostBody content={content} />
    </article>
  );
}

export default BlogPost;
