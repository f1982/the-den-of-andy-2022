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
    <div className="cursor-pointer">
      <Link as={`/post/${slug}`} href="/post/[slug]" passHref>
        <div>
          <div className="mb-5">
            <motion.figure layoutId="project-cover">
              <CoverImage
                slug={slug}
                title={title}
                src={coverImage}
                height={278}
                width={556}
              />
            </motion.figure>
          </div>
          <motion.h3
            className="text-3xl mb-3 leading-snug"
            layoutId="post-title"
          >
            <span className="hover:underline">{title}</span>
          </motion.h3>
          <div className="text-lg mb-4">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </Link>
    </div>
  );
}
