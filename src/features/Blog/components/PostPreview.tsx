import Link from 'next/link';
import { BLOG_PATH } from '../../../constants/menuData';
import Avatar from './PostAuthorAvatar';
import CoverImage from './PostCoverImage';
import DateFormatter from './PostDateFormatter';

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
            height="auto"
            width="100%"
          />
        </div>
      </Link>
      <h3 className="
      md:text-lg
      text-md
      tracking-tighter mb-3 "
      >
        {title}
      </h3>
      <div className="mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
