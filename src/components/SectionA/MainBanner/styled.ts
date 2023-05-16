import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

const commonDivStyles = {
  fontStyle: 'italic',
  fontWeight: 900,
  fontFamily: 'Montserrat',
};

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 88px;
  padding: 79px 71px 93px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 640px;
  min-width: 320px;

  ${mobile} {
    width: 100%;
    height: 420px;
    border-radius: 24px;
    padding: 48px 70px 40px 32px;
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.black111};
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div:first-child {
    ${commonDivStyles}
    font-size: 28px;
    line-height: 34px;
  }

  & > div:last-child {
    font-family: 'Pretendard-bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }

  ${mobile} {
    gap: 12px;

    & > div:first-child {
      ${commonDivStyles}
      font-size: 16px;
      line-height: 20px;
    }

    & > div:last-child {
      font-family: 'Pretendard-bold';
      font-weight: 700;
      font-style: normal;
      font-size: 14px;
      line-height: 140%;
    }
  }
`;
