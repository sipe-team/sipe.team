import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
`;

export const Time = styled.div`
  width: 43px;
  height: 34px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #01ff13;
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  line-height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
