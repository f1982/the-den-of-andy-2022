import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import DotLoader from '../Loader/DotLoader';

export default function ImageWithLoader({
  src,
  withLoader = true,
  className,
  ...rest
}:{
  src:string,
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

  return (
    <div style={{ position: 'relative', minWidth: '300px', minHeight: '200px' }}>
      {/* eslint-disable @next/next/no-img-element */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        ref={ref}
        src={src}
        className={cn('object-cover', className)}
        style={isLoaded ? {} : { display: 'none' }}
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
