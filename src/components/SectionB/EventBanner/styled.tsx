import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 1px solid #01ff13;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 360px;
  padding: 37px 56px;
  &:after {
    border-radius: 32px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: radial-gradient(
      75.91% 535.8% at 80.34% 58.4%,
      rgba(1, 255, 19, 0.2) 0%,
      rgba(1, 255, 19, 0) 100%
    );
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
`;

export const Title = styled.div``;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;
