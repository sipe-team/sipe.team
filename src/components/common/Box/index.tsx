import React from 'react';

import * as S from './styled';

type BoxProps = {
  type: 'BASIC' | 'CONTENT';
  children: React.ReactNode;
};

const Box = ({ type = 'BASIC', children }: BoxProps) => {
  return <S.Wrapper type={type}>{children}</S.Wrapper>;
};

export default Box;