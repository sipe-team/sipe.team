import styled from '@emotion/styled';

export const Wrapper = styled.div<{ fixed: boolean }>`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  bottom: 0;
  left: 0;
`;

export const Group = styled.div`
  width: 1060px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.div<{ color: 'black' | 'gray' }>`
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: ${({ theme, color }) =>
    color === 'black' ? theme.colors.black : theme.colors.gray4};
`;

export const Logos = styled.div`
  display: flex;
  gap: 8px;
`;

export const Icon = styled.div<{ color: 'black' | 'gray' }>`
  cursor: pointer;
  path {
    fill: ${({ theme, color }) =>
      color === 'black' ? theme.colors.black : theme.colors.gray4};
  }
`;
