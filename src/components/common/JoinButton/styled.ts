import styled, { CSSObject } from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export type sizeType = 's' | 'm' | 'lg';

const desktopSizeStyle: Record<sizeType, CSSObject> = {
  s: {
    width: 'auto',
    padding: '9px 24px',
  },
  m: {
    width: 'auto',
    padding: '16px 8px 16px 20px',
    height: '56px',
  },
  lg: {
    width: '100%',
    padding: '16px 7px 16px 40px',
  },
};

const mobileSizeStyle: Record<sizeType, CSSObject> = {
  s: {
    width: 'auto',
    padding: '6px 16px',
    height: '29px',
  },
  m: {
    width: 'auto',
    padding: '6px 5px 6px 12px',
    height: '32px',
  },
  lg: {
    width: '100%',
    padding: '10px 4px 10px 24px',
    height: '40px',
  },
};

export const Wrapper = styled.div<{ size: sizeType }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 560px;
  padding: ${({ size }) => desktopSizeStyle[size].padding};
  width: ${({ size }) => desktopSizeStyle[size].width};
  height: ${({ size }) => desktopSizeStyle[size].height};
  color: ${({ theme }) => theme.colors.black111};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat';
  font-weight: 400;
  font-style: italic;
  line-height: 24px;

  ${mobile} {
    width: ${({ size }) => mobileSizeStyle[size].width};
    height: ${({ size }) => mobileSizeStyle[size].height};
    padding: ${({ size }) => mobileSizeStyle[size].padding};
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  padding-left: 3px;

  ${mobile} {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`;
