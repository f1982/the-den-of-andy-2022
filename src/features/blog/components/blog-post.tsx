import PostBody from './blog-post-body'
import FormattedDate from '@/components/atoms/formatted-date'
import { BlogPostData } from '@/features/blog/blog-types'
import Image from 'next/image'
import React from 'react'

const BlogPost: React.FC<
  Pick<BlogPostData, 'title' | 'date' | 'author' | 'content' | 'coverImage'>
> = ({ title, date, author, content, coverImage }) => (
  <>
    <div className="mx-auto mb-3 mt-6 flex max-w-7xl flex-col items-center justify-center gap-9 px-6 md:flex-row ">
      <div className="w-full md:w-1/3">
        <h1 className="mb-3 text-3xl font-bold">{title}</h1>
        <div className="text-sm font-bold">{author?.name}</div>
        <FormattedDate date={date} />
      </div>

      <div className="flex-1">
        {coverImage && (
          <Image
            src={coverImage}
            className="aspect-video w-full rounded-lg object-cover"
            width={500}
            height={300}
            alt={title!}
          />
        )}
      </div>
    </div>
    <div className="my-9 w-full border-b border-border"></div>
    <div className="container">
      <PostBody content={content} />
    </div>
  </>
)

export default BlogPost
