import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  border-left: none;
  border-right: none;
  padding: 36px 0;
  position: relative;
  height: 410px;
  overflow-x: scroll;
  padding-left: 0;

  ${mobile} {
    padding: 25px;
    height: 307px;
    padding-left: 0;
  }

  & > div {
    overflow-y: hidden;
    overflow-x: scroll;
    padding-right: 8px;
    display: flex;
    justify-content: flex-start;
    position: absolute;
    left: 40px;
    & > div:last-child {
      justify-content: end;
    }
    ${mobile} {
      left: 20px;
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  position: absolute;
  left: 40px;
  right: 0;

  ${mobile} {
    left: 20px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.green};
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  line-height: 90%;

  ${mobile} {
    font-size: 24px;
    line-height: 90%;
  }
`;
