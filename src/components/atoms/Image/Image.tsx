/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageWithLoader from './ImageWithLoader';

export default function ImageComponent({
  src,
  width,
  height = 'auto',
  alt,
  withLoader = true,
  className,
  style,
  ...rest
}:{
  src:string,
  width:number|string,
  height?:number|string,
  alt:string,
  withLoader?: boolean,
  className?:string,
  style?:object
}) {
  const { basePath } = useRouter();
  return (
    <ImageWithLoader
      className={cn('object-cover', className)}
      src={`${basePath}${src}`}
      withLoader
      {...{ width, height, alt }}
      {...rest}
      style={style}
    />
  );
}
