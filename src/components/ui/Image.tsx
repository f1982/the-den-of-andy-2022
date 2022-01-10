/* eslint-disable @next/next/no-img-element */
import NextImage from 'next/image';
import cn from 'classnames';

export default function ImageComponent({
  src,
  width,
  height,
  alt,
  className,
  ...rest
}:{
  src:string,
  width:number,
  height:number,
  alt:string,
  className?:string
}) {
  if (
    src.startsWith('/')
  ) {
    return (
      <img
        className={cn('object-cover', className)}
        src={src}
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
      src={src}
      width={width}
      height={height}
      alt={alt}
      {...rest}
    />
  );
}
