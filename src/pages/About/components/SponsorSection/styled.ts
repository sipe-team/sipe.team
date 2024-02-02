import styled from '@emotion/styled';

import Image from '@/components/Image';

interface ImageProps {
  isMobile: boolean;
  isTablet: boolean;
}

export const ImageList = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: ${({ isTablet }) => (isTablet ? '20px' : '32px')};
  display: grid;
  align-self: stretch;
  place-items: center;
  grid-template-columns: ${({ isMobile, isTablet }) =>
    isMobile
      ? 'repeat(1, 1fr)'
      : isTablet
      ? 'repeat(2, 1fr)'
      : 'repeat(3, 1fr)'};
`;

export const SponsorImage = styled(Image)`
  width: 320px;
  height: 180px;
  position: relative;
  background-color: #2d3748;
  border-radius: 12px;
`;
