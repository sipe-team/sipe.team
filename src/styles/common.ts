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
