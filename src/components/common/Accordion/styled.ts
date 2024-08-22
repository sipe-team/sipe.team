import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isDesktop: boolean }>`
  width: ${({ isDesktop }) => (isDesktop ? '1060px' : '100%')};
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme }) => theme.colors.gray1};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  font-size: ${({ isDesktop }) => (isDesktop ? '17px' : '14px')};
  line-height: ${({ isDesktop }) => (isDesktop ? '24px' : '20px')};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

export const Question = styled.div<{ isDesktop: boolean }>`
  height: ${({ isDesktop }) => (isDesktop ? '48px' : '36px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  padding: ${({ isDesktop }) => (isDesktop ? '0 20px' : '0 12px')};
  box-sizing: border-box;
`;

export const Arrow = styled.div<{ isOpen: boolean; isDesktop: boolean }>`
  cursor: pointer;
  rotate: ${({ isOpen }) => (isOpen ? '0deg' : '180deg')};
  width: ${({ isDesktop }) => (isDesktop ? '48px' : '36px')};
  height: ${({ isDesktop }) => (isDesktop ? '48px' : '36px')};
  svg {
    width: ${({ isDesktop }) => (isDesktop ? '48px' : '36px')};
    height: ${({ isDesktop }) => (isDesktop ? '48px' : '36px')};
  }
`;

export const Answer = styled.div<{ isDesktop: boolean }>`
  margin-top: ${({ isDesktop }) => (isDesktop ? '24px' : '12px')};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray8};
  background-color: ${({ theme }) => theme.colors.gray2};
  font-weight: 600;
  padding: ${({ isDesktop }) => (isDesktop ? '16px 20px' : '12px 16px')};
`;
