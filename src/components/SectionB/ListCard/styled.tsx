import styled from '@emotion/styled';

import { desktop, mobile, tablet } from '@/styles/media-query';

export const Wrapper = styled.div<{ flex: number }>`
  width: 100%;
  height: 296px;
  border-radius: 32px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.gray04};
  color: ${({ theme }) => theme.colors.black222};
  min-width: 320px;

  ${tablet} {
    border-radius: 24px;
    height: 365px;
  }

  ${desktop} {
    flex: ${({ flex }) => flex};
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black111};
  font-family: 'Pretendard-ExtraBold';
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 26.5px;
  margin-left: 9px;

  ${mobile} {
    margin-left: 12px;
    font-size: 20px;
    margin-bottom: 24.5px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 57.5px;

  & > li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    font-size: 16px;
    line-height: 140%;
    flex: 1;
    display: flex;
    align-items: center;
    list-style-type: decimal;

    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.divider};
    }

    &::before {
      content: '•';
      font-size: 108%;
      margin-left: 0.5px;
      margin-right: 16px;
    }

    ${mobile} {
      width: 100%;
      font-size: 14px;
    }
  }
`;
