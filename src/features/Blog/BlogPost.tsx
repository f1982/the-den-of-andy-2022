import React from 'react';
import Typography from '../../components/atoms/typography/Typography';
import PostDate from '../../components/organisms/article/PostDate';
import LandscapeHero from '../../components/organisms/blocks/ContentPageHero';
import { BlogPostData } from '../../types/blog';
import Avatar from './components/PostAuthorAvatar';
import PostBody from './components/PostBody';

function BlogPost({
  title, date, author, content, coverImage, excerpt, ...rest
}:BlogPostData) {
  return (
    <article className="mb-32">
      <div className="container mx-auto">
        <Typography variant="h1" title={title} as="h1" />
        <div className="mb-6">
          <PostDate date={date} />
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <LandscapeHero image={coverImage} text={excerpt} />
      <PostBody content={content} />
    </article>
  );
}

export default BlogPost;
