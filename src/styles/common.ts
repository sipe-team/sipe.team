import styled, { CSSObject } from '@emotion/styled';

export const MAX_WIDTH = '1512px';

export const StyledSection = styled.div<{
  direction?: 'row' | 'column';
  gap?: number;
  overflowX?: CSSObject['overflow-x'];
}>`
  max-width: ${MAX_WIDTH};
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  gap: ${({ gap }) => gap ?? 8}px;
  overflow-x: ${({ overflowX }) => overflowX};
`;

export const StyledH1 = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: 48px;
  letter-spacing: 2%;
`;

export const StyledH2 = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  font-size: 36px;
  letter-spacing: 2%;
`;

export const StyledH3 = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 28px;
  letter-spacing: 2%;
`;

export const StyledH4 = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 24px;
  letter-spacing: 2%;
`;

export const StyledH5 = styled.h5`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 20px;
  letter-spacing: 2%;
`;

export const StyledH6 = styled.h6`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 17px;
  letter-spacing: 2%;
`;
