import FormattedDate from '@/components/atoms/formatted-date'
import HoverScaleImage from '@/components/atoms/hover-scale-image'
import { BLOG_PATH } from '@/config/menu-data'
import { BlogPostData } from '@/features/blog/blog-types'
import Link from 'next/link'
import React from 'react'

const PostPreview: React.FC<
  Pick<BlogPostData, 'title' | 'coverImage' | 'date' | 'slug'>
> = ({ title, coverImage, date, slug }) => (
  <div className="cursor-pointer">
    <Link as={`${BLOG_PATH}/${slug}`} href={`${BLOG_PATH}/[slug]`} passHref>
      <HoverScaleImage src={coverImage} alt={title} />
    </Link>
    <h3 className="mt-3 line-clamp-1 font-semibold">{title}</h3>
    <FormattedDate className="text-xs text-muted-foreground" date={date} />
  </div>
)

export default PostPreview
