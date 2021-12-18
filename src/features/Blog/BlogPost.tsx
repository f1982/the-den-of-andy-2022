import React from 'react'

import PostHeader from './components/post-header'
import PostBody from './components/PostBody';

const BlogPost = (
  { title, coverImage, date, author, content }:
    { title: string,
       coverImage: string, 
       date: string, author: string, content: string }) => {
  return (
    <article className="mb-32">
      <PostHeader
        title={title}
        coverImage={`${coverImage}`}
        date={date}
        author={author}
      />
      <PostBody content={content} />
    </article>
  )
}

export default BlogPost;