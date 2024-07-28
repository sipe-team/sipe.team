import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;

  .cards {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .card {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .video-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 32px;
  }
`;

export const TypeWrapper = styled.article`
  display: flex;
  margin-bottom: 40px;
  gap: 16px;

  .period-button {
    height: 40px;
  }
`;
