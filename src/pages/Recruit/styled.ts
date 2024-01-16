import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 160px;
  gap: 40px;
`;

export const CardTitle = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.white};
`;
