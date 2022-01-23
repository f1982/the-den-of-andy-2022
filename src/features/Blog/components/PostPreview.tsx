import Link from 'next/link';

import { motion } from 'framer-motion';
import DateFormatter from './PostDateFormatter';
import Avatar from './PostAuthorAvatar';
import CoverImage from './PostCoverImage';

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
      <Link as={`/post/${slug}`} href="/post/[slug]" passHref>
        <div className="mb-5 cursor-pointer">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={278}
            width={556}
          />
        </div>
      </Link>
      <h2 className="text-2xl mb-3 leading-snug">
        {title}
      </h2>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
