import React from 'react';

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = ({ src, alt, className, style }: ImageProps) => {
  if (!src) {
    return <img src={'/empty_image.png'} className={className} style={style} />;
  }
  return <img src={src} alt={alt} className={className} style={style} />;
};

export default Image;
