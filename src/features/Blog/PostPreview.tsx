import Link from 'next/link';
import Typography from '../../components/atoms/typography/Typography';
import PostDate from '../../components/organisms/article/PostDate';
import { BLOG_PATH } from '../../constants/menuData';
import CoverImage from './components/PostPreviewImage';

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
      <Typography title={title} variant="h3" as="h2" 
        className='leading-[1.2] line-clamp-2'/>
      <div className="mb-4">
        <PostDate date={date} />
      </div>
      <p className="mb-4 line-clamp-3">{excerpt}</p>
    </div>
  );
}
