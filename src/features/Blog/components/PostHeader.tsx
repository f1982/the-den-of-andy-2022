import { motion } from 'framer-motion';
import Avatar from './PostAuthorAvatar';
import CoverImage from './PostCoverImage';
import DateFormatter from './PostDateFormatter';
import PostTitle from './PostTitle';

export default function PostHeader({
  title, coverImage, date, author, slug,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <motion.figure layoutId="project-cover">
          <CoverImage slug={slug} title={title} src={coverImage} height={620} width={1240} />
        </motion.figure>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
