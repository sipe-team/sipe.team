import styled from '@emotion/styled';

export const Wrapper = styled.section<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};

  .thumbnail {
    min-width: ${({ isMobile }) => (isMobile ? '100%' : '320px')};
    height: ${({ isMobile }) => (isMobile ? '155px' : '220px')};
  }
`;

export const ContentsWrapper = styled.article<{ isMobile: boolean }>`
  width: 100%;
  margin-left: ${({ isMobile }) => (isMobile ? '0px' : '24px')};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .contents {
    .title {
      max-height: 56px;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.white};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .body {
      max-height: 40px;
      color: ${({ theme }) => theme.colors.gray8};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .poster-user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    .user-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      .user-icon {
        margin-right: 12px;
        width: 32px;
        height: 32px;
      }

      .user-name {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .create-date {
      font-size: 12px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: -0.002em;
      text-align: right;
      color: ${({ theme }) => theme.colors.gray6};
    }
  }
`;
