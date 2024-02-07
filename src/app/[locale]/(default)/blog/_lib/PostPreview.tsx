import Image from '../../../../../../src-backup/components/atoms/Image/Image'
import Typography from '../../../../../../src-backup/components/atoms/typography/Typography'
import PostDate from '../../../../../components/organisms/article/PostDate'
import { BLOG_PATH } from '../../../../../config/menu-data'
import { BlogPostData } from '../../../../../types/blog'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

const PostPreview: React.FC<Partial<BlogPostData>> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) => (
  <div className="cursor-pointer">
    <Link as={`${BLOG_PATH}/${slug}`} href={`${BLOG_PATH}/[slug]`} passHref>
      <div className="mb-5">
        {coverImage && (
          <Image
            className={classNames(
              'rounded-xl object-cover',
              'w-full h-[210px] md:h-[180px] lg:h-[270px] mb-6'
            )}
            src={coverImage}
            alt={`${title} preview`}
          />
        )}
      </div>
    </Link>
    <Typography variant="h3" as="h2" className="leading-[1.2] line-clamp-2">
      {title}
    </Typography>
    <div className="mb-4">
      <PostDate date={date} />
    </div>
    <Typography variant="body" className="leading-[1.2] line-clamp-3">
      {excerpt}
    </Typography>
  </div>
)

export default PostPreview
