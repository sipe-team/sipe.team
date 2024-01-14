import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
`;

export const Group = styled.div`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  div:first-of-type {
    font-size: 48px;
    font-weight: 700;
    line-height: 67px;
    color: ${({ theme }) => theme.colors.green};
  }
  div:last-of-type {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactBox = styled.div`
  cursor: pointer;
  width: 240px;
  height: 53px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  gap: 12px;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
`;
