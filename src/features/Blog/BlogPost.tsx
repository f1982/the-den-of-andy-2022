import React from 'react';

import PostHeader from './components/PostHeader';
import PostBody from './components/PostBody';

function BlogPost({
  title, coverImage, date, author, content, slug,
}:{
    title: string,
    coverImage: string,
    date: string,
    author: string,
    content: string,
    slug:string
}) {
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
