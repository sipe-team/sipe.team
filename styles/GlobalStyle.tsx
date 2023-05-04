import React from 'react';
import { css, Global, Theme } from '@emotion/react';

const styles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    appearance: none;
  }
  html {
    font-family: 'GmarketSansMedium';
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black111};
  }

  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const GlobalStyle: React.FC = () => (
  <Global styles={(theme) => styles(theme)} />
);

export default GlobalStyle;
