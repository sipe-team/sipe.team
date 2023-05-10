import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.gray01};
  border-radius: 72px;
  padding: 32px;
  padding-bottom: 64px;
  width: 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: 382px;
  border-radius: 40px;
  background-color: #fff; // TODO: 삭제
`;

export const Title = styled.div`
  margin-top: 56px;
  font-family: 'Pretendard-ExtraBold';
  font-size: 28px;
  line-height: 33px;
`;

export const Description = styled.div`
  margin-top: 24px;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.gray03};
`;
