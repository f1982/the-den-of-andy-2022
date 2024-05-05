import FormattedDate from '@/components/atoms/formatted-date'
import { BLOG_PATH } from '@/config/menu-data'
import { BlogPostData } from '@/features/blog/blog-types'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostPreview: React.FC<
  Pick<BlogPostData, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
> = ({ title, coverImage, date, author, slug }) => (
  <div className="cursor-pointer">
    <Link as={`${BLOG_PATH}/${slug}`} href={`${BLOG_PATH}/[slug]`} passHref>
      <div className="mb-3">
        <Image
          className={clsx(
            'aspect-video w-full rounded-xl object-cover',
            'ring-1 ring-muted',
          )}
          src={coverImage}
          width={600}
          height={400}
          alt={`${title} preview`}
        />
      </div>
    </Link>
    <h3 className="line-clamp-1 font-semibold">{title}</h3>
    <FormattedDate className="text-xs text-muted-foreground" date={date} />
  </div>
)

export default PostPreview
