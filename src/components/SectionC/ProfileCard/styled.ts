import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  height: 338px;
  border-radius: 300px;
  position: relative;
  width: 246.8px;

  ${mobile} {
    width: 190px;
    height: 257px;
  }
`;

export const BadgeGroup = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  color: ${({ theme }) => theme.colors.black111};
`;

export const Badge = styled.div<{ i: number; isName?: boolean }>`
  width: ${({ isName }) => (isName ? 92 : 164)}px;
  height: ${({ isName }) => (isName ? 52 : 36)}px;
  border-radius: 32px;
  background-color: ${({ theme, i }) =>
    i % 2 === 1 ? theme.colors.blue : theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ isName }) => (isName ? -12 : 0)}px;

  ${mobile} {
    width: ${({ isName }) => (isName ? 66 : 113)}px;
    height: ${({ isName }) => (isName ? 38 : 27)}px;
  }

  &:first-of-type {
    font-family: 'Pretendard-ExtraBold';
    font-size: 20px;
    line-height: 24px;

    ${mobile} {
      font-size: 16px;
      line-height: 19px;
    }
  }
  &:last-child {
    justify-content: start;
    padding-left: 17.8px;
    font-size: 14px;
    line-height: 17px;

    ${mobile} {
      font-size: 10px;
      line-height: 12px;
      padding-left: 12px;
    }
  }
`;

export const Photo = styled.img`
  border: none;
  width: 100%;
  height: 100%;
`;
