import Typography from '../../../components/atoms/typography/Typography';
import LandscapeHero from '../../../components/organisms/blocks/LandscapeHero';
import { BlogPostData } from '../../../types/blog';
import Avatar from './PostAuthorAvatar';
import PostDate from '../../../components/organisms/article/PostDate';

export default function PostHeader({
  title, coverImage, date, author, excerpt,
}:Omit<BlogPostData, 'content'>) {
  return (
    <>
      <div className="container mx-auto">
        <Typography variant="h2" title={title} as="h1" />
        <div className="mb-6">
          <PostDate date={date} />
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <LandscapeHero image={coverImage} text={excerpt} />
    </>
  );
}
