import styled from '@emotion/styled';

export const Description = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  gap: 16px;
  display: inline-flex;
  margin-bottom: 40px;
`;

export const DescriptionTitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: white;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 39.2px;
  letter-spacing: 0.56px;
  word-wrap: break-word;
`;

export const DescriptionSubTitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: #e2e8f0;
  font-size: 14px;
  margin: 0 auto;
  font-weight: 400;
  line-height: 19.6px;
  word-wrap: break-word;
`;

export const Menus = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: ${({ isMobile }) => (isMobile ? 'start' : 'center')};
  gap: 16px;
  margin-bottom: 40px;
  overflow: scroll;
  width: 100%;

  .activity-button {
    min-width: 85px;
    padding: 0 24px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.002em;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 480px;
  height: 270px;
  border-radius: 12px;
`;
