import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isOpened: boolean }>`
  cursor: pointer;
  width: 21px;
  height: 14px;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transition: 0.2s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }

  span:nth-child(2) {
    top: 7px;
    transform-origin: left center;
  }

  span:nth-child(3) {
    top: 14px;
    transform-origin: left center;
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      span:nth-child(1) {
        transform: rotate(45deg);
        top: 1px;
        left: 0px;
      }
      span:nth-child(2) {
        width: 0%;
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
        top: 16px;
        left: 0px;
      }
    `}
`;
