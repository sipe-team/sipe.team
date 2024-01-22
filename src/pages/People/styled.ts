import styled from '@emotion/styled';

export const Wrapper = styled.article<{ isMobile: boolean }>`
  padding: 0 20px;

  .contents {
    display: grid;
    grid-template-columns: ${({ isMobile }) => (isMobile ? '100%' : '50% 50%')};
    gap: 32px;
  }
`;
