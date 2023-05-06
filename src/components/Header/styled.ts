import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black111};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 40px;
  z-index: 100;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 84px;
`;

export const Anchors = styled.div`
  display: flex;
  gap: 40px;
  font-size: 18px;
  line-height: 21px;
`;
