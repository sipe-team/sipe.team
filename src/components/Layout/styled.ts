import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isDesktop: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .layout {
    width: ${({ isDesktop }) => (isDesktop ? '1060px' : '100%')};
    padding: ${({ isDesktop }) => (isDesktop ? '0' : '0 20px')};
  }
`;
