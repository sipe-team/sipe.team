import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  border-top: 1px solid #383838;
  padding: 64px 43px 80px 40px;
  width: 100%;

  ${mobile} {
    padding: 52px 24px 88px 24px;
  }
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Sns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  ${mobile} {
    gap: 16px;
  }
`;

export const Email = styled.div`
  color: ${({ theme }) => theme.colors.gray02};
  margin-top: 27px;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;

  ${mobile} {
    font-size: 14px;
    line-height: 140%;
  }
`;
