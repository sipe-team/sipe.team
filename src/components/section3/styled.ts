import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: none;
  border-right: none;
  display: flex;
  padding: 36px 0;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.green};
`;
