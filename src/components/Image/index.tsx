import clsx from 'clsx';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React, { CSSProperties, ReactNode, useCallback } from 'react';

import styles from './index.module.scss';

type ImageProps = Omit<NextImageProps, 'src'> & {
  objectFit?: CSSProperties['objectFit'];
  src?: string;
};

const Image = ({
  src,
  alt,
  className,
  objectFit,
  fill,
  width,
  height,
  sizes,
  ...rest
}: ImageProps) => {
  const defaultClassName = clsx(
    objectFit && styles[objectFit],
    fill ? styles.fill : className
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
    [fill, width, height, className]
  );

  if (!src) {
    return (
      <>
        {renderFillImage(
          <NextImage
            src={'/assets/empty_image.png'}
            className={defaultClassName}
            alt="기본 이미지"
            fill={fill}
            sizes={defaultSizes}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            {...rest}
          />
        )}
      </>
    );
  }

  return (
    <>
      {renderFillImage(
        <NextImage
          src={src}
          alt={alt}
          className={defaultClassName}
          fill={fill}
          sizes={defaultSizes}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          {...rest}
        />
      )}
    </>
  );
};

export default Image;
