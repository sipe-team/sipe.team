import styled from '@emotion/styled';

export const Wrapper = styled.div<{ type: 'BASIC' | 'CONTENT' }>`
  padding: ${({ type }) => (type === 'BASIC' ? '20px' : '16px')};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
`;
