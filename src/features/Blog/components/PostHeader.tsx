import { motion } from 'framer-motion';
import Image from '../../../components/ui/Image';
import Avatar from './PostAuthorAvatar';
import DateFormatter from './PostDateFormatter';

export default function PostHeader({
  title, coverImage, date, author, slug,
}) {
  return (
    <>
      <div className=" max-w-4xl mx-auto">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="
          text-6xl
          md:text-6xl
          lg:text-7xl
          font-bold
          tracking-tighter
          md:leading-none
          text-center
          md:text-left
        "
          layoutId="post-title"
        >
          {title}
        </motion.h1>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <Image
        className="mx-auto hover:shadow-md"
        src={coverImage}
        alt={`Cover Image for ${title}`}
        width={1240}
        height="auto"
      />
      <div className="max-w-2xl mx-auto">
        <DateFormatter dateString={date} />
      </div>
    </>
  );
}
