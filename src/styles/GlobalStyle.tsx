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
  }
  html {
    font-family: 'Pretendard-Regular', sans-serif;
    /* font-family: 'Montserrat', sans-serif; */
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black111};
    scroll-behavior: smooth;
  }

  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-top: 113px;
    margin: 0;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const GlobalStyle: React.FC = () => (
  <Global styles={(theme) => styles(theme)} />
);

export default GlobalStyle;
