import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 40px;
`;
