import styled from '@emotion/styled';

import { desktop, tablet } from '@/styles/media-query';

export const Wrapper = styled.div`
  background: #2a2a2a;
  box-shadow: inset 0px 0px 28px rgba(0, 0, 0, 0.45);
  border-radius: 90px;
  padding: 46px 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 757px;
  color: #e6ffe8;
  text-shadow: 0px 0px 12px #00ffff;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px #01ff13;
  border-radius: 64px;
  padding: 48px 74px;
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  line-height: 110%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:last-child {
    margin-left: auto;
  }

  ${tablet} {
    font-size: 80px;
  }
  ${desktop} {
    font-size: 100px;
  }
`;
