import PostDate from '@/components/organisms/article/PostDate'
import { BLOG_PATH } from '@/config/menu-data'
import { BlogPostData } from '@/types/blog'
import clsx from 'clsx'
import Image from 'next/image'
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
          width={600}
          height={400}
          alt={`${title} preview`}
        />
      </div>
    </Link>
    <h3 className="font-semibold">{title}</h3>
    <span className="text-xs text-muted-foreground">
      <PostDate date={date} />
    </span>
  </div>
)

export default PostPreview
