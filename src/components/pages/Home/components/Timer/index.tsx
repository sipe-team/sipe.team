import useTimer from '../../hooks/useTimer';
import styles from './index.module.scss';

export interface TimerProps {
  /**
   * Date.now()와 같은 형태의 timestamp
   */
  dueDate?: number;
  isRecruiting: boolean;
}

export default function Timer({ dueDate, isRecruiting }: TimerProps) {
  const { dates, hours, minutes, seconds } = useTimer(dueDate);

  const formattedTime = (number: number) => String(number).padStart(2, '0');

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(dates) : 0}
      </div>
      <div>일</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(hours) : 0}
      </div>
      <div>시간</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(minutes) : 0}
      </div>
      <div>분</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(seconds) : 0}
      </div>
      <div>초</div>
    </div>
  );
}
