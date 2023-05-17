import styled from '@emotion/styled';

import { mobile } from '@/styles/media-query';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.black222};
  display: flex;
  gap: 128px;

  &:first-child {
    border-top: 1px solid #999999;
  }

  border-bottom: 1px solid #999999;
  border-image: linear-gradient(to left, transparent 94%, #999999 10%) 1; // FIXME
  flex-direction: row;
  align-items: center;

  ${mobile} {
    min-width: 280px;
    gap: 11px;
    border-bottom: 1px solid #999999;
    border-image: none;
  }
`;

export const LeftSection = styled.div<{ height: number }>`
  width: 78px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 19px 0;
  height: ${(props) => `${props.height + 38}px`};

  ${mobile} {
    width: 36px;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
  }
`;

export const LeftSectionText = styled.div`
  font-size: 16px;
  line-height: 140%;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  padding: 13px 0;

  ${mobile} {
    font-size: 10px;
    padding: 12px 0;
  }
`;

export const RigtSectionContentUl = styled.div`
  margin: 0;
  padding: 0;
  padding-left: 25px;
`;

export const RightSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Ul = styled.ul`
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 30px;

  ${mobile} {
    margin-bottom: 10px;
    padding-left: 0;
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
    font-size: 12px;
  }
`;
export const ChildLi = styled.li`
  color: #666666; // FIXME
  font-size: 16px;
  line-height: 160%;

  ${mobile} {
    font-size: 10px;
  }
`;
