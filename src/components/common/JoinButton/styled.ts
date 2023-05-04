import styled from '@emotion/styled';

export type sizeType = 's' | 'm' | 'lg';

export const Wrapper = styled.div<{ size: sizeType }>`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 560px;
  padding: ${({ size }) => (size === 's' ? '9px 24px' : '20px 29px')};
  width: ${({ size }) => (size === 'lg' ? '100%' : 'auto')};
  color: ${({ theme }) => theme.colors.black111};
  font-size: ${({ size }) => (size === 's' ? '20px' : '24px')};
  display: flex;
`;
