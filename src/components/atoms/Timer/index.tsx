import styles from './index.module.scss';

type Props = {
  dates: number;
  hours: number;
  minutes: number;
  seconds: number;
  isRecruiting: boolean;
};

function Timer({ dates, hours, minutes, seconds, isRecruiting }: Props) {
  const formattedTime = (number: number) => String(number).padStart(2, '0');

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(dates) : ''}
      </div>
      <div className={styles.text}>일</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(hours) : ''}
      </div>
      <div className={styles.text}>시간</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(minutes) : ''}
      </div>
      <div className={styles.text}>분</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(seconds) : ''}
      </div>
      <div className={styles.text}>초</div>
    </div>
  );
}

export default Timer;
