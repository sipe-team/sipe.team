import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  border-radius: 32px;
  padding: 40px 34px 23px 34px;
  background-color: ${({ theme }) => theme.colors.gray04};

  ${mobile} {
    border-radius: 24px;
    min-width: 320px;
    padding: 32px 20px;
  }
`;
