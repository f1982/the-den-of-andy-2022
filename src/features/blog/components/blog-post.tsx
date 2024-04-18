import PostBody from './blog-post-body'
import FormattedDate from '@/components/atoms/formatted-date'
import Prose from '@/components/atoms/prose'
import LandscapeHero from '@/components/page/hero-landscape'
import { BlogPostData } from '@/features/blog/blog-data'
import React from 'react'

const BlogPost: React.FC<Partial<BlogPostData>> = ({
  title,
  date,
  author,
  content,
  coverImage,
}) => (
  <Prose>
    {coverImage && <LandscapeHero image={coverImage} text="hello" />}
    <div className="container mx-auto mt-32">
      <h1>{title}</h1>
      <span>
        <FormattedDate date={date} />
      </span>
      <div className="mb-4">{author?.name}</div>
    </div>

    <PostBody content={content} />
  </Prose>
)

export default BlogPost
