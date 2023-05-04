import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 706px;
  background: ${({ theme }) => theme.colors.gray01};
  border-radius: 72px;
  padding: 32px;
  padding-bottom: 72px;
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
`;

export const Description = styled.div`
  margin-top: 24px;
`;
