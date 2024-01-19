import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1060px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme }) => theme.colors.gray1};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Question = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const Arrow = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  rotate: ${({ isOpen }) => (isOpen ? '180deg' : '0deg')};
`;

export const Answer = styled.div`
  margin-top: 24px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray8};
  background-color: ${({ theme }) => theme.colors.gray2};
  font-weight: 600;
  padding: 20px 16px;
`;
