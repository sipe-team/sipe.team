import * as S from './styled';

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
        <S.ContentUl>
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
        </S.ContentUl>
      </S.RightSection>
    </S.Wrapper>
  );
};

export default ScheduleItem;
