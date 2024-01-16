import styled from '@emotion/styled';

interface TableProps {
  isApplicant: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 40px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.white};
`;

export const TableWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  display: inline-flex;
`;

export const Table = styled.div<TableProps>`
  align-self: stretch;
  width: 520px;
  height: ${({ isApplicant }) => (isApplicant ? '24px' : '37px')};
  padding: 20px;
  border-radius: 12px;
  gap: 20px;
  background: #1a202c;
  border-radius: #253046;
  overflow: hidden;
  border: 1px #2d3748 solid;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

export const Text = styled.div`
  flex: 1 1 0;
  color: white;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 19.6px;
  word-wrap: break-word;
`;

export const SubText = styled.div`
  color: #e2e8f0;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 19.6px;
  word-wrap: break-word;
`;
