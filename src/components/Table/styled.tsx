import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface TableProps {
  isApplicant: boolean;
}

export const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.div<{ isMobile: boolean }>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? '0 20px' : '0')};
`;

export const Table = styled.div<{ isMobile: boolean; isApplicant: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '100%' : '560px')};
  height: ${({ isApplicant }) => (isApplicant ? '64px' : '80px')};
  padding: 20px;
  border-radius: 12px;
  gap: 20px;
  background: #1a202c;
  border-radius: #253046;
  overflow: hidden;
  border: 1px #2d3748 solid;
  justify-content: space-between;
  align-items: ${({ isMobile }) => (isMobile ? 'start' : 'center')};
  display: inline-flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  font-weight: 500;
  line-height: 19.6px;

  ${({ isApplicant }) =>
    isApplicant &&
    css`
      &:last-child {
        background-color: #2d3748;
      }
    `}
`;

export const Text = styled.div<TableProps>`
  flex: 1 1 0;
  color: white;
  font-size: ${({ isApplicant }) => (isApplicant ? '14px' : '20px')};
`;

export const SubText = styled.div`
  color: #e2e8f0;
  font-size: 14px;
`;
