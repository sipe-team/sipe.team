import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.gray01};
  border-radius: 72px;
  padding: 32px;
  padding-bottom: 64px;
  width: 100%;

  ${mobile} {
    min-width: 320px;
    min-height: 357px;
    padding: 20px;
    padding-bottom: 48px;
    border-radius: 24px;
    height: 357px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 382px;
  border-radius: 72px; // TODO: 확인방법 체크
  background-color: #fff; // TODO: 삭제
  object-fit: cover;

  ${mobile} {
    height: 160px;
    font-size: 18px;
    line-height: 21px;
    border-radius: 24px; // TODO: 확인방법 체크
  }
`;

export const Title = styled.div`
  margin-top: 56px;
  font-family: 'Pretendard-ExtraBold';
  font-size: 28px;
  line-height: 33px;
  margin-left: 24px;
  font-weight: 800;

  ${mobile} {
    margin-top: 32px;
    margin-left: 4px;
    font-weight: 800;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Description = styled.div`
  margin-top: 24px;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.gray03};
  margin-left: 24px;

  ${mobile} {
    margin-top: 16px;
    margin-left: 4px;
    font-size: 14px;
  }
`;
