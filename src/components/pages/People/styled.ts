import styled from '@emotion/styled';

export const Wrapper = styled.article<{ isMobile: boolean }>`
  padding: 0 20px;
  box-sizing: border-box;
  .contents {
    display: grid;
    grid-template-columns: ${({ isMobile }) => (isMobile ? '100%' : '1fr 1fr')};
    gap: 32px;
  }
`;

export const PeriodsWrapper = styled.article`
  display: flex;
  margin-bottom: 40px;
  gap: 16px;

  .period-button {
    height: 40px;
  }
`;
