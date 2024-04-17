import Image from '@/components/atoms/Image/Image'
import { BLOG_PATH } from '@/config/menu-data'
import parseDate from '@/features/about/utils/date.utils'
import { BlogPostData } from '@/types/blog'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const PostPreview: React.FC<
  Pick<BlogPostData, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
> = ({ title, coverImage, date, author, slug }) => (
  <div className="cursor-pointer">
    <Link as={`${BLOG_PATH}/${slug}`} href={`${BLOG_PATH}/[slug]`} passHref>
      <div className="mb-5">
        <Image
          className={clsx('aspect-video rounded-xl object-cover')}
          src={coverImage}
          alt={`${title} preview`}
        />
      </div>
    </Link>
    <h3 className="font-semibold">{title}</h3>
    <span className="text-xs text-muted-foreground">{parseDate(date!)}</span>
  </div>
)

export default PostPreview
