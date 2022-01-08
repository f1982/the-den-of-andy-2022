/* eslint-disable @next/next/no-img-element */
import NextImage from 'next/image';

export default function ImageComponent({
  src,
  width,
  height,
  alt,
  ...rest
}:{
  src:string,
  width:number,
  height:number,
  alt:string
}) {
  if (
    src.indexOf('/static') !== -1
    || src.indexOf('/assets') !== -1
  ) {
    return (
      <img src={src} width={width} height={height} alt={alt} {...rest} />
    );
  }

  return (
    <NextImage src={src} width={width} height={height} alt={alt} {...rest} />
  );
}
