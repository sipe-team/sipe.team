import styled from '@emotion/styled';

export const MAX_WIDTH = '1512px';

export const StyledH1 = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: 48px;
  letter-spacing: 2%;
  line-height: 28px;
`;

export const StyledH2 = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  font-size: 36px;
  letter-spacing: 2%;
  line-height: 28px;
`;

export const StyledH3 = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 28px;
  letter-spacing: 2%;
  line-height: 28px;
`;

export const StyledH4 = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 24px;
  letter-spacing: 2%;
  line-height: 28px;
`;

export const StyledH5 = styled.h5`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 20px;
  letter-spacing: 2%;
  line-height: 28px;
`;

export const StyledH6 = styled.h6`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 17px;
  letter-spacing: 2%;
  line-height: 28px;
`;
