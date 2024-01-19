import React from 'react';

import * as S from './styled';

type BoxProps = React.ComponentProps<'div'> & {
  type?: 'BASIC' | 'CONTENT';
  minHeight?: number;
};

const Box = ({ type = 'BASIC', minHeight, children, className }: BoxProps) => {
  return (
    <S.Wrapper type={type} minHeight={minHeight} className={className}>
      {children}
    </S.Wrapper>
  );
};

export default Box;
