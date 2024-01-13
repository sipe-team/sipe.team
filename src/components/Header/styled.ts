import styled from '@emotion/styled';

import { MAX_WIDTH } from '@/styles/common';
import { mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Group = styled.div`
  width: 1060px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Menus = styled.div`
  display: flex;
  gap: 16px;
`;
