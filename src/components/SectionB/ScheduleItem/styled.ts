import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.black222};
  display: flex;
  gap: 128px;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
  border-image: linear-gradient(to left, transparent 94%, #999999 10%) 1; // FIXME
  flex-direction: row;
  align-items: center;
  padding: 15px;

  ${mobile} {
    min-width: 280px;
    gap: 11px;
    padding: 24px 25px 24px 0;
    border-top: 1px solid #999999;
    border-image: none;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 78px;

  ${mobile} {
    min-width: 35px;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    padding: 13px 0 13px 0;
  }
`;

export const LeftSectionText = styled.div`
  padding-top: 13px;
  padding-right: 40px;
  padding-bottom: 13px;
  font-size: 16px;
  line-height: 140%;

  ${mobile} {
    font-size: 10px;
    padding: 12px 0 12px 0;
  }
`;
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Ul = styled.ul`
  margin-top: 0;
  margin-bottom: 10px;

  ${mobile} {
    margin-bottom: 10px;
    padding-left: 18px;
  }
`;

export const Title = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 8px;

  ${mobile} {
    font-size: 14px;
  }
`;

export const Li = styled.li`
  font-size: 16px;
  line-height: 160%;

  ${mobile} {
    font-size: 10px;
  }
`;
export const ChildLi = styled.li`
  color: #666666; // FIXME
  font-size: 16px;
  line-height: 160%;

  ${mobile} {
    font-size: 8px;
  }
`;
