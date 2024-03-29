/* eslint-disable @next/next/no-img-element */
import DotLoader from '../spinner/DotLoader'
import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'

interface ImageWithLoaderProps {
  src: string
  width?: number | string
  height?: number | string
  withLoader?: boolean
  className?: string
  alt?: string
  style?: object
}

const ImageWithLoader = ({
  src,
  width,
  height,
  withLoader = true,
  className,
  style = {},
  alt = '',
  ...rest
}: ImageWithLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      setIsLoaded(true)
    }
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80px',
        width,
        height
      }}
      {...rest}>
      <img
        ref={ref}
        src={src}
        className={cn(
          'object-contain opacity-0',
          'transition-opacity ease-out duration-1000',
          className
        )}
        alt={alt}
        style={
          isLoaded
            ? {
                ...style,
                ...{
                  width,
                  height,
                  opacity: 1
                }
              }
            : {
                opacity: 0
              }
        }
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <DotLoader />
        </div>
      )}
    </div>
  )
}

export default ImageWithLoader
