import styled from '@emotion/styled';

export const Meta = styled.section`
  .profile {
    width: 70px;
    height: 70px;
  }

  .main-info {
    .name {
      font-weight: 800;
      font-size: 16px;
      line-height: 137%;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .sub-info {
    .part {
      font-family: Pretendard;
      font-size: 12px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: -0.002em;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray05};
    }
  }
`;

export const Introduce = styled.section``;

export const Review = styled.section``;
