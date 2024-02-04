import * as S from './styled';

type ScheduleCardProps = {
  title: string;
  processDate: string;
  subTitle: string;
};

const ScheduleCard = ({ title, processDate, subTitle }: ScheduleCardProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.HighLightTitle>{processDate}</S.HighLightTitle>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Wrapper>
  );
};

export default ScheduleCard;
