import styled from '@emotion/styled';

import { desktop, mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  border: 1px solid #01ff13;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 360px;
  padding: 38px 50px 38px 56px;
  &:after {
    border-radius: 32px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: radial-gradient(
      75.91% 535.8% at 80.34% 58.4%,
      rgba(1, 255, 19, 0.2) 0%,
      rgba(1, 255, 19, 0) 100%
    );
  }
  min-width: 780px;

  ${mobile} {
    margin-right: 0;
    width: 100%;
    padding: 24px 26px;
    min-width: 100%;
  }
`;

export const Text = styled.div`
  display: flex;
  min-width: 320px;

  align-items: center;
  flex-direction: row;
  gap: 46px;

  ${mobile} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    gap: 16px;
  }
`;

export const Title = styled.div`
  font-family: 'Pretendard-ExtraBold';
  font-size: 48px;
  line-height: 57px;
  color: ${({ theme }) => theme.colors.green};

  ${mobile} {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.gray03};

  ${mobile} {
    font-size: 12px;
    line-height: 140%;
  }
`;

export const ArrowIcon = styled.div`
  display: none;
  ${desktop} {
    display: block;
  }
`;
