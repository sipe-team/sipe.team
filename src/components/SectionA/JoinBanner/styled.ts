import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  border-radius: 88px;
  height: 88px;
  padding: 28px 16px 27px 65px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.green};
  position: relative;
  min-width: 320px;
  &:after {
    border-radius: 88px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(117, 251, 79, 0.2) 0%,
        rgba(117, 251, 79, 0) 100%
      ),
      radial-gradient(
        75.91% 535.8% at 80.34% 58.4%,
        rgba(59, 254, 166, 0.2) 0%,
        rgba(59, 254, 166, 0) 100%
      );
  }

  ${mobile} {
    padding: 20px 104px 18px 24px;
    height: 128px;
    border-radius: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  & > div:first-child {
    font-family: 'Pretendard-Bold';
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
  }
  & > div:last-child {
    font-weight: 400;
    font-size: 28px;
    line-height: 33px;
  }

  ${mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    & > div:first-child {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
    & > div:last-child {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export const Text = styled.div`
  min-width: 334px;
`;

export const JoinButtonWrapper = styled.div`
  position: absolute;
  right: 16px;
  z-index: 10;
`;
