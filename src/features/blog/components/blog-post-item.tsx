import React from 'react'

import Link from 'next/link'

import HoverScaleImage from '@/components/atoms/hover-scale-image'

interface PostPreviewProps {
  title: string
  imageUrl: string
  date: string
  url: string
}

const BlogPostItemView: React.FC<PostPreviewProps> = ({
  title,
  imageUrl,
  date,
  url,
}) => (
  <Link href={url} passHref>
    <HoverScaleImage src={imageUrl} alt={title} />

    <div className="mt-3">
      <h3 className="line-clamp-1 font-semibold">{title}</h3>
      <span className="text-xs text-muted-foreground">{date}</span>
    </div>
  </Link>
)

export default BlogPostItemView
