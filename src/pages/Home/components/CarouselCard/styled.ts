import CardWrapper from '@/components/CardWrapper';
import styled from '@emotion/styled';

export const Wrapper = styled(CardWrapper)`
  width: 181px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  div:first-of-type {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray8};
  }
  div:last-of-type {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
