import styles from './index.module.scss';
import * as S from './styled';

type ScheduleCardProps = {
  title: string;
  processDate: string;
  subTitle: string;
};

const ScheduleCard = ({ title, processDate, subTitle }: ScheduleCardProps) => {
  return (
    <S.Wrapper>
      <div className={styles.title}>{title}</div>
      <div className={styles.highlightTitle}>{processDate}</div>
      <div className={styles.subTitle}>{subTitle}</div>
    </S.Wrapper>
  );
};

export default ScheduleCard;
