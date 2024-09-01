import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    .tooltip-container {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const TooltipContainer = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;
  border-radius: 8px;
  padding: 8px 4px;
  position: absolute;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.gray2} transparent transparent
      transparent;
    margin-left: -5px;
  }
`;
