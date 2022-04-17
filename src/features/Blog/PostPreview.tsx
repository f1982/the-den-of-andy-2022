import Link from 'next/link';
import Typography from '../../components/atoms/typography/Typography';
import PostDate from '../../components/organisms/article/PostDate';
import { BLOG_PATH } from '../../constants/menuData';
import CoverImage from './components/PostCoverImage';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <Link as={`${BLOG_PATH}/${slug}`} href={`${BLOG_PATH}/[slug]`} passHref>
        <div className="mb-5 cursor-pointer">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height="240px"
            width="100%"
            style={{ maxWidth: '600px' }}
          />
        </div>
      </Link>
      <Typography title={title} variant="h4" />
      <div className="mb-4">
        <PostDate date={date} />
      </div>
      <p className="mb-4">{excerpt}</p>
    </div>
  );
}
