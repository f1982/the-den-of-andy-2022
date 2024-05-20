import React from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import FormattedDate from '@/components/atoms/formatted-date'

import { BlogPostData } from '@/features/blog/blog-types'

import PostBody from './blog-post-body'

const BlogPost: React.FC<BlogPostData> = ({
  title,
  date,
  author,
  content,
  coverImage,
}) => (
  <>
    <div className="mx-auto mb-3 mt-6 flex h-96 w-full flex-col justify-start gap-9 bg-secondary py-12">
      <div className="container animate-pulse">
        <FormattedDate date={date} />
        <h1 className="mb-3 text-3xl font-bold">{title}</h1>
        <div className="text-sm font-bold">{author?.name}</div>
      </div>
    </div>

    <div className="container mb-12 mt-[-180px] max-w-6xl">
      {coverImage && (
        <Image
          src={coverImage}
          className={clsx(
            'aspect-video w-full rounded-lg bg-card object-cover',
            // 'animate-fade-in',
          )}
          width={500}
          height={300}
          alt={title!}
        />
      )}
    </div>

    {/* <div className="my-9 w-full border-b border-border"></div> */}
    <div className="container">
      <PostBody content={content} />
    </div>
  </>
)

export default BlogPost
