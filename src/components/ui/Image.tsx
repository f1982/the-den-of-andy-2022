/* eslint-disable @next/next/no-img-element */
import NextImage from 'next/image';
import cn from 'classnames';
import { useRouter } from 'next/router';

export default function ImageComponent({
  src,
  width,
  height,
  alt,
  className,
  ...rest
}:{
  src:string,
  width:number|string,
  height:number|string,
  alt:string,
  className?:string
}) {
  const { basePath } = useRouter();
  if (
    src.startsWith('/')
  ) {
    return (
      <img
        className={cn('object-cover', className)}
        src={`${basePath}${src}`}
        width={width}
        height={height}
        alt={alt}
        {...rest}
      />
    );
  }

  return (
    <NextImage
      className={cn('object-cover', className)}
      src={`${basePath}${src}`}
      width={width}
      height={height}
      alt={alt}
      {...rest}
    />
  );
}
