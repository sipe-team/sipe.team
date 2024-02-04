import styled from '@emotion/styled';

export const Meta = styled.section`
  display: flex;
  height: 70px;
  margin-bottom: 20px;

  .profile-bg {
    min-width: 70px;
    min-height: 70px;
    background-color: #2d3748;
    border-radius: 4px;
  }

  .profile {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: contain;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 8.5px 0 8.5px 16px;
  }

  .main-info {
    display: flex;
    justify-content: space-between;
    height: 100%;
    .name {
      display: inline;
      font-weight: 800;
      font-size: 16px;
      line-height: 137%;
      color: ${({ theme }) => theme.colors.white};
    }
    .links {
      display: flex;
      gap: 12px;
    }
  }

  .sub-info {
    display: flex;
    justify-content: space-between;
    .part {
      font-size: 12px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: -0.002em;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray6};
    }
    .organizer {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.green};
    }

    .organizer-mark {
      margin-left: 4px;
    }
  }
`;

export const Introduce = styled.section`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.002em;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray8};
  margin-bottom: 20px;
`;

export const Review = styled.section`
  h3 {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.002em;
    text-align: left;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.002em;
    text-align: left;
    color: ${({ theme }) => theme.colors.gray8};
  }
`;
