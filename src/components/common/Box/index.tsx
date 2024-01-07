import React from 'react';

import * as S from './styled';

type BoxProps = React.ComponentProps<'div'> & {
  type?: 'BASIC' | 'CONTENT';
};

const Box = ({ type = 'BASIC', children, className }: BoxProps) => {
  return (
    <S.Wrapper type={type} className={className}>
      {children}
    </S.Wrapper>
  );
};

export default Box;
