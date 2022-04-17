import React from 'react';

import PostHeader from './components/PostHeader';
import PostBody from './components/PostBody';
import { BlogPostData } from '../../types/blog';

function BlogPost(props:BlogPostData) {
  return (
    <article className="mb-32">
      <PostHeader {...props} />
      <PostBody content={props.content} />
    </article>
  );
}

export default BlogPost;
