/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageWithLoader from './ImageWithLoader';
import 'react-lazy-load-image-component/src/effects/blur.css';
import DotLoader from '../Loader/DotLoader';

export default function ImageComponent({
  src,
  width,
  height = 'auto',
  alt,
  withLoader = true,
  className,
  ...rest
}:{
  src:string,
  width:number|string,
  height?:number|string,
  alt:string,
  withLoader?: boolean,
  className?:string
}) {
  const { basePath } = useRouter();
  // load image from public folder
  if (
    src.startsWith('/')
  ) {
    return (
    // <LazyLoadImage
    //   effect="blur"
    //   src={`${basePath}${src}`}
    //   {...{ width, height, alt }}
    // />
      <ImageWithLoader
        className={cn('object-cover', className)}
        src={`${basePath}${src}`}
        withLoader
        {...{ width, height, alt }}
        {...rest}
      />
    );
  }
  // load image from url
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
