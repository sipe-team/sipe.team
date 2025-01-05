import { ComponentProps } from 'react';

import { color, Typography } from '@sipe-team/side';

import styles from './index.module.scss';

function Time(props: ComponentProps<typeof Typography>) {
  return (
    <Typography
      className={styles.time}
      color={color.white}
      size={24}
      weight="bold"
      {...props}
    />
  );
}

function Text(props: ComponentProps<typeof Typography>) {
  return (
    <Typography
      className={styles.text}
      color={color.white}
      size={20}
      weight="semiBold"
      {...props}
    />
  );
}

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
      <Time>{isRecruiting ? formattedTime(dates) : 0}</Time>
      <Text>일</Text>
      <Time>{isRecruiting ? formattedTime(hours) : 0}</Time>
      <Text>시간</Text>
      <Time>{isRecruiting ? formattedTime(minutes) : 0}</Time>
      <Text>분</Text>
      <Time>{isRecruiting ? formattedTime(seconds) : 0}</Time>
      <Text>초</Text>
    </div>
  );
}

export default Timer;
