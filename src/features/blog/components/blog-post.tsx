import PostBody from './blog-post-body'
import Prose from '@/components/atoms/prose'
import Typography from '@/components/atoms/typography/Typography'
import PostDate from '@/components/organisms/article/PostDate'
import LandscapeHero from '@/components/organisms/blocks/ContentPageHero'
import { BlogPostData } from '@/types/blog'
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
        <PostDate date={date} />
      </span>
      <div className="mb-4">{author?.name}</div>
    </div>

    <PostBody content={content} />
  </Prose>
)

export default BlogPost
