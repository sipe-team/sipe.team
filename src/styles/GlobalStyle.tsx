import { css, Global, Theme } from '@emotion/react';
import React from 'react';

const styles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    appearance: none;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  a,
  img,
  b,
  u,
  i,
  ul,
  li,
  label,
  legend,
  table,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  footer,
  header,
  nav,
  section,
  summary,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-family: 'Pretendard-Regular', sans-serif;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    color: ${theme.colors.black};
    background-color: ${theme.colors.black};
    scroll-behavior: smooth;
    overflow-x: hidden;
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
    padding: 0;
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

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    object-fit: cover;
    scale: 0.5;
  }

  /* todo: 공통으로 처리하는걸로 대체 */
  .swiper-pagination {
    @media (min-width: 1100px) {
      display: none;
    }
  }

  .swiper-slide-active {
    scale: 1.5;
    z-index: 99;
  }
`;

const GlobalStyle: React.FC = () => (
  <Global styles={(theme) => styles(theme)} />
);

export default GlobalStyle;
