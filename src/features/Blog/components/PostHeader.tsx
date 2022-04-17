import Typography from '../../../components/atoms/typography/Typography';
import { BlogPostData } from '../../../types/blog';
import Avatar from './PostAuthorAvatar';
import PostDate from './PostDate';

export default function PostHeader({
  title, coverImage, date, author, excerpt,
}:BlogPostData) {
  return (
    <>
      <div className="container mx-auto">
        <Typography variant="h2" title={title} as="h1" />
        <div className="mb-6">
          <PostDate date={date} />
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        backgroundColor: 'blue',
        backgroundImage: `url(${coverImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
      >
        <div className="flex-1" />
        <div
          className="container mx-auto"
          style={{ marginBottom: '20px', bottom: 0 }}
        >
          <Typography className="text-on-surface" title={excerpt} variant="h4" />
        </div>
      </div>
    </>
  );
}
