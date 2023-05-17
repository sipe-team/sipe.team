import * as S from './styled';
import styled from '@emotion/styled';
import { mobile } from '@/styles/media-query';

type ScheduleItemProps = {
  title: string;
  list: (string | { parents: string; children: string[] })[];
  targetWeeks: number[];
  height: number;
};

const ScheduleItem = ({
  title,
  list,
  targetWeeks,
  height,
}: ScheduleItemProps) => {
  return (
    <S.Wrapper>
      <S.LeftSection height={height}>
        {targetWeeks.map((week) => {
          return <S.LeftSectionText>{week}주차</S.LeftSectionText>;
        })}
      </S.LeftSection>
      <S.RightSection>
        <S.Title>{title}</S.Title>
        <Ul>
          {list.map((li) => {
            const hasSubContent =
              typeof li === 'object' && !Array.isArray(li) && li !== null;

            if (!hasSubContent) return <S.Li>{li}</S.Li>;

            return (
              <S.Li>
                {li.parents}
                <S.Ul>
                  {li.children.map((childContent) => {
                    return <S.ChildLi>{childContent}</S.ChildLi>;
                  })}
                </S.Ul>
              </S.Li>
            );
          })}
        </Ul>
      </S.RightSection>
    </S.Wrapper>
  );
};

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 30px;
  ${mobile} {
    padding-left: 21px;
  }
`;

export default ScheduleItem;
