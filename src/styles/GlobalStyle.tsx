import { css, Global, Theme } from '@emotion/react';
import React from 'react';

const styles = (theme: Theme) => css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff')
      format('woff');
    font-weight: 800;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    appearance: none;
    line-height: 140%;
  }
  html {
    font-family: 'Pretendard-Regular', sans-serif;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-top: 64px;
    margin: 0;
    letter-spacing: -0.2%;
  }

  button {
    border: 0;
    background-color: transparent;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .rectangle-up {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }

  .rectangle-down {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const GlobalStyle: React.FC = () => (
  <Global styles={(theme) => styles(theme)} />
);

export default GlobalStyle;
