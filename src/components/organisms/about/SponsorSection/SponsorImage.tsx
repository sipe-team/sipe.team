'use client';

import { useState } from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import styles from './index.module.scss';

interface SponsorImageProps {
  src: string;
  alt: string;
}

function SponsorImage({ src, alt }: SponsorImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const imageProperties = hasError
    ? {
        src: '/assets/empty_image.png',
        alt: 'Image not available',
        fill: true,
        className: styles.fallbackImage,
      }
    : {
        src,
        alt,
        width: 0,
        height: 0,
        onError: handleError,
        className: styles.sponsorImage,
      };

  return (
    <div className={clsx(styles.imageWrapper, hasError && styles.errorWrapper)}>
      <Image {...imageProperties} />
    </div>
  );
}

export default SponsorImage;
