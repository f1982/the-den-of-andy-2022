import Link from 'next/link';
import Image from '../../components/atoms/Image/Image';
import Typography from '../../components/atoms/typography/Typography';
import PostDate from '../../components/organisms/article/PostDate';
import { BLOG_PATH } from '../../constants/menuData';

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
      <Link as={`${BLOG_PATH}/${slug}`} href={`${BLOG_PATH}/[slug]`} passHref>
        <div className="mb-5">
          <Image
            className='rounded-xl w-full h-[270px] mb-6'
            src={coverImage}
            alt={`${title} preview`} />
        </div>
      </Link>
      <Typography
        variant="h3"
        as="h2"
        className="leading-[1.2] line-clamp-2"
      >
        {title}
      </Typography>
      <div className="mb-4">
        <PostDate date={date} />
      </div>
      <p className="mb-4 line-clamp-3">{excerpt}</p>
    </div>
  );
}
