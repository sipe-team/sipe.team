import styled from '@emotion/styled';

interface SectionProps {
  index: number;
}

export const Section = styled.div<SectionProps>`
  width: 100%;
  display: flex;
  flex: 1 1;
  padding: 8px 16px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: ${({ index }) => (index !== 3 ? '120px' : '0px')};
`;

export const Image = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 12px;
`;

export const Description = styled.div<SectionProps>`
  padding: 8px 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  width: auto;
  height: 270px;
  display: inline-flex;

  box-shadow: ${({ index }) =>
    index !== 2 ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : ''};
  border: ${({ index }) => (index !== 2 ? '1px black solid' : '')};
`;

export const Title = styled.div`
  color: white;
  font-size: 36px;
  font-family: Pretendard;
  font-weight: 800;
  line-height: 50.4px;
  letter-spacing: 0.72px;
  word-wrap: break-word;
`;

export const SubTitle = styled.div`
  color: #e2e8f0;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 19.6px;
  word-wrap: break-word;
`;
