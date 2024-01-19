import styled from '@emotion/styled';

export const Wrapper = styled.div<{
  type: 'BASIC' | 'CONTENT';
  minHeight: number | undefined;
}>`
  padding: ${({ type }) => (type === 'BASIC' ? '20px' : '16px')};
  background-color: ${({ theme }) => theme.colors.gray1};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 12px;
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : `unset`)};
`;
