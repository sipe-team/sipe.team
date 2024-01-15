import styled from '@emotion/styled';

const Common = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 40px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.white};
  }
  :active {
    background-color: ${({ theme }) => theme.colors.gray1};
    color: ${({ theme }) => theme.colors.gray4};
    border-radius: 100px;
  }
`;

export const HomeButton = styled(Common)<{ color: 'green' | 'black' }>`
  width: 392px;
  height: 56px;
  background-color: ${({ theme, color }) =>
    color === 'green' ? theme.colors.green : theme.colors.gray1};
  color: ${({ theme, color }) =>
    color === 'green' ? theme.colors.black : theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  font-size: 22px;
  line-height: 30.8px;

  border: ${({ theme, color }) =>
    color === 'black' ? `1px solid ${theme.colors.gray2}` : 'none'};

  :hover {
    border: ${({ theme, color }) =>
      color === 'green' ? `1px solid ${theme.colors.gray3}` : 'none'};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray4};
    color: ${({ theme }) => theme.colors.gray2};
    cursor: not-allowed;
  }
`;

export const MenuButton = styled(Common)<{ selected: boolean }>`
  background-color: transparent;
  width: 88px;
  font-size: 15px;
  line-height: 21px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.green : theme.colors.white};
`;

export const ApplyButton = styled(Common)`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.black};
  width: 99px;
  font-size: 16px;
  line-height: 22.4px;
`;

export const ChipButton = styled(Common)<{ selected: boolean }>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.green : theme.colors.gray1};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.black : theme.colors.white};
  width: 67px;
  font-size: 24px;
  line-height: 19.6px;
  border-radius: 100px;
`;
