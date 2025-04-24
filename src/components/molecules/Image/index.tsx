'use client';

import { CSSProperties, ReactNode, useCallback } from 'react';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

import clsx from 'clsx';

import styles from './index.module.scss';

type ImageProps = Omit<NextImageProps, 'src'> & {
  objectFit?: CSSProperties['objectFit'];
  src?: string;
};

function Image({
  src,
  alt,
  className,
  objectFit,
  fill,
  width,
  height,
  sizes,
  ...rest
}: ImageProps) {
  const defaultClassName = clsx(
    objectFit && styles[objectFit],
    fill ? styles.fill : className,
  );
  const defaultSizes = sizes || '(max-width: 1060px) 100vw, 50vw';

  const renderFillImage = useCallback(
    (children: ReactNode) => {
      if (fill) {
        return (
          <div
            className={clsx(className, styles.fillImageWrapper)}
            style={{
              width: width ? `${width}px` : '100%',
              height: height ? `${height}px` : '100%',
            }}
          >
            {children}
          </div>
        );
      }

      return children;
    },
    [fill, width, height, className],
  );

  const fallbackImageSource = '/assets/empty_image.png';
  const imageSrc = src || fallbackImageSource;
  const imageAlt = alt || 'Siper Image';

  return (
    <>
      {renderFillImage(
        <NextImage
          key={imageSrc}
          src={imageSrc}
          alt={imageAlt}
          className={defaultClassName}
          fill={fill}
          sizes={defaultSizes}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== fallbackImageSource) {
              target.src = fallbackImageSource;
            }
          }}
          {...rest}
        />,
      )}
    </>
  );
}

export default Image;
