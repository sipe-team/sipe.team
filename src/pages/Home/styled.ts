import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div<{ backgroundImage?: string }>`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.colors.gray6};
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
    `}
`;

export const Group = styled.div<{ isMobile: boolean }>`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ isMobile }) => (isMobile ? 0 : '16px')};
`;

export const Title = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  div:first-of-type {
    font-weight: 900;
    line-height: ${({ isMobile }) => (isMobile ? '29.9px' : '67px')};
    font-size: ${({ isMobile }) => (isMobile ? '26px' : '48px')};
  }
  div:last-of-type {
    font-size: ${({ isMobile }) => (isMobile ? '12px' : '22px')};
    font-weight: 600;
    line-height: ${({ isMobile }) => (isMobile ? '16.8px' : '31px')};
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
`;

export const MobileContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 24px;
  width: 100%;
  overflow-x: scroll;
  padding: 0 20px;
`;

// export const MobileCenterContent = styled(MobileContent)`
//   display: flex;
//   justify-content: center;
// `;

export const Carousels = styled.div`
  gap: 16px;
  display: inline-flex;
`;
