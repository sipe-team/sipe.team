import styled from '@emotion/styled';

export const Wrapper = styled.div<{ width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  .layout {
    width: ${({ width }) => `${width}px`};
  }
`;
