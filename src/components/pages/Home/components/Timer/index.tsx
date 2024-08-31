'use client';

import styles from './index.module.scss';

export interface TimerProps {
  dates: number;
  hours: number;
  minutes: number;
  seconds: number;
  isRecruiting: boolean;
}

export default function Timer({
  dates,
  hours,
  minutes,
  seconds,
  isRecruiting,
}: TimerProps) {
  const formattedTime = (number: number) => String(number).padStart(2, '0');

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(dates) : 0}
      </div>
      <div className={styles.text}>일</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(hours) : 0}
      </div>
      <div className={styles.text}>시간</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(minutes) : 0}
      </div>
      <div className={styles.text}>분</div>
      <div className={styles.time}>
        {isRecruiting ? formattedTime(seconds) : 0}
      </div>
      <div className={styles.text}>초</div>
    </div>
  );
}
