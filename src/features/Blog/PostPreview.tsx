import Link from 'next/link';
import Typography from '../../components/atoms/typography/Typography';
import { BLOG_PATH } from '../../constants/menuData';
import parseDate from '../../utils/date.utils';
import CoverImage from './components/PostCoverImage';
import PostDate from './components/PostDate';

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
        <Typography variant="body" title={parseDate(date)} as="time" />
        <PostDate date={date} />
      </div>
      <p className="mb-4">{excerpt}</p>
    </div>
  );
}
