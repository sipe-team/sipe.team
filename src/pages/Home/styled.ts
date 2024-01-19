import Layout from '@/components/Layout';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.colors.gray6};
`;

export const Group = styled.div<{ isMobile: boolean }>`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ isMobile }) => (isMobile ? 0 : '16px')};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  div:first-of-type {
    font-size: 48px;
    font-weight: 900;
    line-height: 67px;
  }
  div:last-of-type {
    font-size: 22px;
    font-weight: 600;
    line-height: 31px;
    text-align: center;
  }
`;

export const Content = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 40px;
  align-items: center;
  overflow-y: scroll;
`;

export const MobileContent = styled.div`
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 24px;
  width: 100%;
  overflow-y: scroll;
`;

export const Carousels = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 20px;
  &::after {
    content: '';
    width: 1px;
    flex-shrink: 0;
  }
`;
