import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Group = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
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

export const MobileMenus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 0 20px;
  padding-bottom: 20px;
`;
