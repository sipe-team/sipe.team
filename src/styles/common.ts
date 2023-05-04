import styled from '@emotion/styled';

export const StyledSection = styled.div<{
  direction?: 'row' | 'column';
  gap?: number;
}>`
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  gap: ${({ gap }) => gap ?? 8}px;
`;
