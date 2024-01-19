import styled from '@emotion/styled';

export const Wrapper = styled.div<{ maxWidth: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  .layout {
    max-width: ${({ maxWidth }) => `${maxWidth}px`};
  }
`;
