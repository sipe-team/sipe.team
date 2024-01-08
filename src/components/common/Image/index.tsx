import React from 'react';

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {};

const Image = ({ src }: ImageProps) => {
  return <img src={src}/>;
};
