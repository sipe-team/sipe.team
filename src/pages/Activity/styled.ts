import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 20px;

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
`;

export const TypeWrapper = styled.article`
  display: flex;
  margin-bottom: 40px;
  gap: 16px;

  .period-button {
    height: 40px;
  }
`;
