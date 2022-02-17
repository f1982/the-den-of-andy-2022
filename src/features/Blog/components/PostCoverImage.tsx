import cn from 'classnames';
import Link from 'next/link';
import Image from '../../../components/Image/Image';

interface PostCoverImageProps {
  title:string;
  src:string;
  slug:string;
  height?:number|string;
  width?:number|string;
}

export default function PostCoverImage(
  {
    title,
    src,
    slug,
    height,
    width,
  }:PostCoverImageProps,
) {
  return (
    <div className="mx-auto">
      {slug ? (
      // <Link as={`/post/${slug}`} href="/post/[slug]">
        <Image
          className="mx-auto"
          src={src}
          alt={`Cover Image for ${title}`}
              // className={cn('shadow-sm', 'hover:shadow-md transition-shadow duration-200')}
              // layout="responsive"
          width={width}
          height={height}
        />
      // </Link>
      ) : (
        <p>image</p>
      )}
    </div>
  );
}
