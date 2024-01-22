import React, { forwardRef } from 'react';

import { ReactComponent as BaseImage } from '@/assets/empty_image.svg';

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = ({ src, alt, className }: ImageProps) => {
  if (!src) {
    return <BaseImage className={className} />;
  }
  return <img src={src} alt={alt} className={className} />;
};

export default forwardRef(Image);
