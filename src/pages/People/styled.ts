import styled from '@emotion/styled';

export const Wrapper = styled.article<{ isMobile: boolean }>`
  padding: 0 20px;

  .contents {
    display: grid;
    grid-template-columns: ${({ isMobile }) => (isMobile ? '100%' : '50% 50%')};
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
