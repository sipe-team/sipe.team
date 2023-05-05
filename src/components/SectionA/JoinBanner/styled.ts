import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-radius: 88px;
  padding: 25px 29px 25px 62px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.green};
  position: relative;
  &:after {
    border-radius: 88px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(117, 251, 79, 0.2) 0%,
        rgba(117, 251, 79, 0) 100%
      ),
      radial-gradient(
        75.91% 535.8% at 80.34% 58.4%,
        rgba(59, 254, 166, 0.2) 0%,
        rgba(59, 254, 166, 0) 100%
      );
  }
`;
