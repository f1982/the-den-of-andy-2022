import { motion } from 'framer-motion';
import Image from '../../../components/atom/Image/Image';
import Avatar from './PostAuthorAvatar';
import DateFormatter from './PostDateFormatter';

export default function PostHeader({
  title, coverImage, date, author, slug,
}) {
  return (
    <>
      <div className=" max-w-2xl mx-auto">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="
          text-lg
          font-bold
          tracking-tighter
          text-center
          md:text-xl
          md:leading-none
          md:text-left
          mb-6
        "
          layoutId="post-title"
        >
          {title}
        </motion.h1>
        <div className="mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <Image
        className="mx-auto
        transition ease-in delay-350 duration-300
        hover:shadow-md mb-12"
        src={coverImage}
        alt={`Cover Image for ${title}`}
        width="100%"
        height="auto"
      />
      <div className="max-w-2xl mx-auto">
        <DateFormatter dateString={date} />
      </div>
    </>
  );
}
