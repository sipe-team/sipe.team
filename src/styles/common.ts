import styled from '@emotion/styled';

export const MAX_WIDTH = '1512px';

export const StyledSection = styled.div<{
  direction?: 'row' | 'column';
  gap?: number;
}>`
  max-width: ${MAX_WIDTH};
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  gap: ${({ gap }) => gap ?? 8}px;
`;
