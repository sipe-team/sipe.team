import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 88px;
  padding: 79px 71px 77px 71px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 640px;
  & > div {
    color: ${({ theme }) => theme.colors.black111};
    display: flex;
    flex-direction: column;
    gap: 11px;
  }
`;
