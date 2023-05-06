import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 88px;
  padding: 79px 71px 77px 71px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 640px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.black111};
  display: flex;
  flex-direction: column;
  gap: 11px;
  & > div:first-child {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
  }
  & > div:last-child {
    font-family: 'Pretendard-Bold';
    font-size: 24px;
    line-height: 29px;
  }
`;
