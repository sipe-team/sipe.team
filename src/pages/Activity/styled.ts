import styled from '@emotion/styled';

export const Wrapper = styled.div`
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
