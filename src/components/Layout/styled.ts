import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div<{
  isDesktop: boolean;
  backgroundImage?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
    `}

  .layout {
    width: ${({ isDesktop }) => (isDesktop ? '1060px' : '100%')};
    padding: ${({ isDesktop }) => (isDesktop ? '0' : '0 20px')};
  }
`;
