import Avatar from '../../components/atoms/avatar/Avatar'
import Typography from '../../components/atoms/typography/Typography'
import PostDate from '../../components/organisms/article/PostDate'
import LandscapeHero from '../../components/organisms/blocks/ContentPageHero'
import Comments from '../../components/organisms/comment/Comments'
import { BlogPostData } from '../../types/blog'
import PostBody from './components/PostBody'
import React from 'react'

const BlogPost: React.FC<Partial<BlogPostData>> = ({
  title,
  date,
  author,
  content,
  coverImage
}) => (
  <article className="mb-32">
    <div className="container mx-auto">
      <Typography variant="h2" as="h1">
        {title}
      </Typography>
      <div className="mb-4">
        <PostDate date={date} />
      </div>
      <div className="mb-4">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </div>
    {coverImage && <LandscapeHero image={coverImage} />}
    <PostBody content={content} />
    <Comments />
  </article>
)

export default BlogPost
