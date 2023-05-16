import styled from '@emotion/styled';

import { desktop, mobile, tablet } from '@/styles/media-query';

export const Wrapper = styled.div`
  padding: 47px 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 757px;
  color: #e6ffe8;
  text-shadow: 0px 0px 12px #00ffff;
  min-width: 320px;

  ${mobile} {
    padding: 20px;
    background: #2A2A2A;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.45);
    border-radius: 24px;
    max-height: 444px;
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;

  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  line-height: 110%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  min-width: 280px;
  max-height: 404px;

  background: #ffffff;
  box-shadow: 0px 0px 12px #01ff13;
  border-radius: 20px;

  & > div:last-child {
    margin-left: auto;
  }

  ${tablet} {
    font-size: 80px;
  }

  ${desktop} {
    box-shadow: 0px 0px 20px #01ff13;
    border-radius: 64px;
    font-size: 100px;
    justify-content: space-between;
    padding: 48px 74px;
  }
`;
