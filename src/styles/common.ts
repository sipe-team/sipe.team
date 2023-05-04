import styled from '@emotion/styled';

export const StyledSection = styled.div<{ direction?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  gap: 8px;
`;
