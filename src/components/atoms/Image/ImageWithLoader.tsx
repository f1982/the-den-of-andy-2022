import cn from 'classnames';
import React, {
  ClassAttributes, useEffect, useRef, useState,
} from 'react';
import DotLoader from '../spinner/DotLoader';

export default function ImageWithLoader({
  src,
  withLoader = true,
  className,
  style = {},
  ...rest
}:{
  src:string,
  withLoader?: boolean,
  className?:string,
  style?:object
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div style={{
      position: 'relative',
      // minWidth: '200px',
      // minHeight: '100px',
    }}
    >
      {/* eslint-disable @next/next/no-img-element */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        ref={ref}
        src={src}
        className={cn('object-cover', className)}
        style={isLoaded ? { ...style } : { display: 'none' }}
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
            <div>{isLoaded ? 'loaded' : 'loading'}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}
