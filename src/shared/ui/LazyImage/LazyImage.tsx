import { memo, useLayoutEffect, useState } from 'react'
import type { ImgHTMLAttributes, ReactNode } from 'react'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string,
  src: string,
  alt: string,
  onImageLoad?: ({ width, height }: { width: number, height: number }) => void
  fallback?: ReactNode
  errorFallback?: ReactNode
}

// TODO: add story
export const LazyImage = memo((props: LazyImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    onImageLoad,
    fallback,
    errorFallback,
    ...extraProps
  } = props
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src ?? ''

    img.onload = (element) => {
      setIsLoading(false)

      if (onImageLoad) {
        const target = element.target as HTMLImageElement

        const width = target.width || 0
        const height = target.height || 0

        onImageLoad({ width, height })
      }
    }

    img.onerror = () => {
      setHasError(true)
      setIsLoading(false)
    }

  }, [src, onImageLoad])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...extraProps}
    />
  )
})