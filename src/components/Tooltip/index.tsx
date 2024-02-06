import React from 'react';

import * as S from './styled';

export type TooltipProps = {
  children: React.ReactNode;
  title: string;
};

const Tooltip = ({ children, title }: TooltipProps) => {
  return (
    <S.Wrapper>
      {children}
      <S.TooltipContainer className="tooltip-container">
        {title}
      </S.TooltipContainer>
    </S.Wrapper>
  );
};

export default Tooltip;
