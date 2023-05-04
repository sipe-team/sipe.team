import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-top: 1px solid #383838;
  padding: 64px 40px 80px 40px;
  width: 100%;
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Sns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Email = styled.div`
  color: ${({ theme }) => theme.colors.gray02};
  margin-top: 27px;
`;
