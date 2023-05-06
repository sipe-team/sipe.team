import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 338px;
  background: #d9d9d9; // TODO: 삭제
  border-radius: 300px;
  position: relative;
`;

export const BadgeGroup = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  color: ${({ theme }) => theme.colors.black111};
`;

export const Badge = styled.div<{ i: number; isName?: boolean }>`
  width: ${({ isName }) => (isName ? 100 : 188)}px;
  height: ${({ isName }) => (isName ? 52 : 36)}px;
  border-radius: 32px;
  background-color: ${({ theme, i }) =>
    i % 2 === 1 ? theme.colors.blue : theme.colors.green};
  font-size: ${({ isName }) => (isName ? 24 : 16)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ isName }) => (isName ? -12 : 0)}px;
  font-family: 'Pretendard-ExtraBold';

  &:first-child {
    font-size: 24px;
    line-height: 29px;
  }
  &:last-child {
    font-size: 16px;
    line-height: 19px;
  }
`;
