import styled from '@emotion/styled';

export type sizeType = 's' | 'm' | 'lg';

export const Wrapper = styled.div<{ size: sizeType }>`
  background-color: ${({ theme }) => theme.colors.green};
  height: ${({ size }) => (size === 's' ? '42px' : '70px')};
  border-radius: 560px;
  width: ${({ size }) => (size === 'lg' ? '100%' : 'auto')};
  color: ${({ theme }) => theme.colors.black111};
  font-size: ${({ size }) => (size === 's' ? '20px' : '24px')};
  display: flex;
  align-items: center;
  padding: 0px ${({ size }) => (size === 's' ? '24px' : '11px')};
  padding-left: ${({ size }) => (size === 's' ? '24px' : '29px')};
  justify-content: space-between;
  font-family: 'Montserrat';
  font-weight: 400;
  font-style: italic;
  line-height: 24px;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 21px;
  padding-left: 3px;
`;
