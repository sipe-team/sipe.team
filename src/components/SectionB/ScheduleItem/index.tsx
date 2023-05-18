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
        {targetWeeks.map((week, index) => {
          return <S.LeftSectionText key={index}>{week}주차</S.LeftSectionText>;
        })}
      </S.LeftSection>
      <S.RightSection>
        <S.Title>{title}</S.Title>
        <S.ContentUl>
          {list.map((li, index) => {
            const hasSubContent =
              typeof li === 'object' && !Array.isArray(li) && li !== null;

            if (!hasSubContent) return <S.Li key={index}>{li}</S.Li>;

            return (
              <S.Li key={index}>
                {li.parents}
                <S.Ul>
                  {li.children.map((childContent, index) => {
                    return <S.ChildLi key={index}>{childContent}</S.ChildLi>;
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
