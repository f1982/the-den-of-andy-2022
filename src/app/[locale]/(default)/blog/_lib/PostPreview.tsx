import Image from '../../../../../components/atoms/Image/Image'
import Typography from '../../../../../components/atoms/typography/Typography'
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
  slug,
}) => (
  <div className="cursor-pointer">
    <Link as={`${BLOG_PATH}/${slug}`} href={`${BLOG_PATH}/[slug]`} passHref>
      <div className="mb-5">
        {coverImage && (
          <Image
            className={classNames(
              'rounded-xl object-cover',
              'mb-6 h-[210px] w-full md:h-[180px] lg:h-[270px]',
            )}
            src={coverImage}
            alt={`${title} preview`}
          />
        )}
      </div>
    </Link>
    <Typography variant="h3" as="h2" className="line-clamp-2 leading-[1.2]">
      {title}
    </Typography>
    <div className="mb-4">
      <PostDate date={date} />
    </div>
    <Typography variant="body" className="line-clamp-3 leading-[1.2]">
      {excerpt}
    </Typography>
  </div>
)

export default PostPreview
