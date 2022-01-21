import React from 'react';

import PostHeader from './components/PostHeader';
import PostBody from './components/PostBody';
import { BlogPostData } from '../../types/blog';

function BlogPost({
  title, coverImage, date, author, content, slug,
}:BlogPostData) {
  return (
    <article className="mb-32">
      <PostHeader
        slug={slug}
        title={title}
        coverImage={`${coverImage}`}
        date={date}
        author={author}
      />
      <PostBody content={content} />
    </article>
  );
}

export default BlogPost;
