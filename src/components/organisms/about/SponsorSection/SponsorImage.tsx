'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Flex } from '@sipe-team/side';
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
    <Flex
      align="center"
      className={clsx(styles.imageWrapper, hasError && styles.errorWrapper)}
      justify="center"
    >
      <Image {...imageProperties} />
    </Flex>
  );
}

export default SponsorImage;
