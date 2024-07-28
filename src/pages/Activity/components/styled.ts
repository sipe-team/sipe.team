import styled from '@emotion/styled';

export const Wrapper = styled.section<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};

  .thumbnail {
    min-width: ${({ isMobile }) => (isMobile ? '100%' : '320px')};
    height: ${({ isMobile }) => (isMobile ? '200px' : '220px')};
    object-fit: cover;
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

      img.user-icon {
        border-radius: 50%;
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

export const VideoWrapper = styled.article`
  width: 100%;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    .contents {
      opacity: 1;
    }
  }
`;

export const VideoContentsWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  background-color: #999999;
  padding: 16px;
  transition: opacity 0.3s;

  .contents-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 14px;
    font-weight: 500;

    .title {
      color: ${({ theme }) => theme.colors.white};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .body {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .link-button {
    width: 100%;
    height: 37px;
    border-radius: 8px;
    border: solid 1.2px ${({ theme }) => theme.colors.gray7};
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: border 0.3s;

    &:hover {
      border: solid 1.2px ${({ theme }) => theme.colors.gray10};
    }
  }
`;
