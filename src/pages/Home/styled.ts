import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.colors.gray4};
`;

export const Group = styled.div`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  div:first-of-type {
    font-size: 48px;
    font-weight: 900;
    line-height: 67px;
  }
  div:last-of-type {
    font-size: 22px;
    font-weight: 600;
    line-height: 31px;
  }
`;

export const Content = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

export const Carousels = styled.div`
  display: flex;
  gap: 16px;
`;
