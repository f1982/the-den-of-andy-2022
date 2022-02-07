import Link from 'next/link';
import { BLOG_PATH } from '../../../config/menuData';
import CoverImage from './PostCoverImage';
import DateFormatter from './PostDateFormatter';

export default function PostHero({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="container mx-auto items-start">
        <div className="mt-4 mb-4">
          <span className="
          inline-block py-1 px-2
          rounded
          bg-secondary-medium text-th-primary-medium text-opacity-75
          text-xs font-medium tracking-widest
          "
          >
            CATEGORY
          </span>
        </div>
        <Link href={`${BLOG_PATH}/[slug]`} as={`${BLOG_PATH}/${slug}`} passHref>
          <div className="cursor-pointer">
            <CoverImage
              title={title}
              src={coverImage}
              slug={slug}
              height={120}
              width="100%"
            />
          </div>
        </Link>
        <h2 className="
            sm:text-3xl text-2xl
            title-font font-medium
            mt-4 mb-4
          "
        >
          {title}
        </h2>
        <div className="text-lg mt-4 mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4 mb-6">{excerpt}</p>
      </div>
    </section>
  );
}
