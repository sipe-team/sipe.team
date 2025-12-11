'use client';

import { useState } from 'react';

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

  const imageSrc = hasError ? '/assets/empty_image.png' : src;
  const imageClassName = hasError ? styles.fallbackImage : styles.sponsorImage;

  return (
    <div className={clsx(styles.imageWrapper, hasError && styles.errorWrapper)}>
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        className={imageClassName}
      />
    </div>
  );
}

export default SponsorImage;
