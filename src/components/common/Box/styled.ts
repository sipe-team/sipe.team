import styled from '@emotion/styled';

export const Wrapper = styled.div<{ type: 'BASIC' | 'CONTENT' }>`
  padding: ${({ type }) => (type === 'BASIC' ? '20px' : '16px')};
  background-color: ${({ theme }) => theme.colors.gray900};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 12px;
`;
