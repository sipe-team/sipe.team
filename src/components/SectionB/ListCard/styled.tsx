import styled from '@emotion/styled';

export const Wrapper = styled.div<{ flex: number }>`
  width: 100%;
  height: 365px;
  border-radius: 32px;
  padding: 34px 33px;
  flex: ${({ flex }) => flex};
  background-color: ${({ theme }) => theme.colors.gray04};
  color: ${({ theme }) => theme.colors.black222};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black111};
`;
