import React from 'react';

import * as S from './styled';

type CardWrapperProps = React.ComponentProps<'div'> & {
  type?: 'BASIC' | 'CONTENT';
  minHeight?: number;
};

const CardWrapper = ({
  type = 'BASIC',
  minHeight,
  children,
  ...props
}: CardWrapperProps) => {
  return (
    <S.Wrapper type={type} minHeight={minHeight} {...props}>
      {children}
    </S.Wrapper>
  );
};

export default CardWrapper;
