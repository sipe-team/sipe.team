import CardWrapper from '@/components/atoms/CardWrapper';

import styles from './index.module.scss';

type ScheduleCardProps = {
  title: string;
  processDate: string;
  subTitle: string;
};

function ScheduleCard({ title, processDate, subTitle }: ScheduleCardProps) {
  return (
    <CardWrapper className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.highlightTitle}>{processDate}</div>
      <div className={styles.subTitle}>{subTitle}</div>
    </CardWrapper>
  );
}

export default ScheduleCard;
