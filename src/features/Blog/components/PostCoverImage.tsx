import cn from 'classnames';
import Link from 'next/link';
import Image from '../../../components/atoms/Image/Image';

interface PostCoverImageProps {
  title:string;
  src:string;
  slug:string;
  height?:number|string;
  width?:number|string;
  style?:object;
}

export default function PostCoverImage(
  {
    title,
    src,
    slug,
    height,
    width,
    style,
  }:PostCoverImageProps,
) {
  return (
    <div className="mx-auto" style={style}>
      {slug ? (
      // <Link as={`/post/${slug}`} href="/post/[slug]">
        <Image
          className="mx-auto object-cover"
          src={src}
          alt={`Cover Image for ${title}`}
          // className={cn('shadow-sm', 'hover:shadow-md transition-shadow duration-200')}
          // layout="responsive"
          width={width}
          height={height}
          style={{ height: '240px', borderRadius: '16px' }}
        />
      ) : (
        <p>image</p>
      )}
    </div>
  );
}
