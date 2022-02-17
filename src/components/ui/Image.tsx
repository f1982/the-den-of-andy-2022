/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from 'react';
import NextImage from 'next/image';
import cn from 'classnames';
import { useRouter } from 'next/router';
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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  const { basePath } = useRouter();
  // load image from public folder
  if (
    src.startsWith('/')
  ) {
    return (
      <div style={{ position: 'relative', minWidth: '600px', minHeight: '200px' }}>
        <img
          ref={ref}
          className={cn('object-cover', className)}
          style={isLoaded ? {} : { display: 'none' }}
          src={`${basePath}${src}`}
          width={width}
          height={height}
          alt={alt}
          onLoad={() => {
            setIsLoaded(true);
          }}
          {...rest}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          {(!isLoaded && withLoader) ? (
            <>
              <DotLoader />
              <p>{isLoaded ? 'isloaded' : 'loading'}</p>
            </>
          ) : null}
        </div>
      </div>
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
