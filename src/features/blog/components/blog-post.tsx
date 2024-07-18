import React from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import FormattedDate from '@/components/shared/formatted-date'

import { BlogPostData } from '@/features/blog/blog-types'

const BlogPost: React.FC<BlogPostData> = ({
  title,
  date,
  author,
  content,
  coverImage,
}) => (
  <>
    <div className="mx-auto mb-3 mt-6 flex w-full flex-col justify-start gap-9 bg-secondary py-12">
      <div className="container mb-[150px] animate-pulse">
        <FormattedDate date={date} />
        <h1 className="mb-3 text-3xl font-bold">{title}</h1>
        <div className="text-sm font-bold">{author?.name}</div>
      </div>
    </div>

    <div className="container mb-12 mt-[-180px] max-w-5xl">
      <Image
        src={coverImage}
        className={clsx(
          'aspect-video w-full rounded-lg bg-card object-cover shadow-2xl',
        )}
        width={500}
        height={300}
        alt={title!}
      />
    </div>

    <div className="container max-w-3xl">
      <article
        className="prose-md prose mx-auto max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  </>
)

export default BlogPost
