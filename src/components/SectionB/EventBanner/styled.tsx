import styled from '@emotion/styled';

import { desktop } from '@/styles/media-query';

export const Wrapper = styled.div`
  border: 1px solid #01ff13;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 360px;
  padding: 37px 56px;
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
`;

export const Text = styled.div`
  display: flex;
  gap: 46px;
  flex-direction: column;
  justify-content: start;

  ${desktop} {
    align-items: center;
    flex-direction: row;
  }
`;

export const Title = styled.div`
  font-family: 'Pretendard-ExtraBold';
  font-size: 48px;
  line-height: 57px;
  color: ${({ theme }) => theme.colors.green};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 140%;
`;

export const ArrowIcon = styled.div`
  display: none;
  ${desktop} {
    display: block;
  }
`;
