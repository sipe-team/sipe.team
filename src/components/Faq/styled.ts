import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 160px;
  gap: 40px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Faqs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
