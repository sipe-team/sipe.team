import { ComponentProps } from 'react';

import { color, Flex, Typography } from '@sipe-team/side';

import styles from './index.module.scss';

function Time(props: ComponentProps<typeof Typography>) {
  return (
    <Flex align="center" asChild className={styles.time} justify="center">
      <Typography color={color.white} size={24} weight="bold" {...props} />
    </Flex>
  );
}

function Text(props: ComponentProps<typeof Typography>) {
  return (
    <Typography color={color.white} size={20} weight="semiBold" {...props} />
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
    <Flex align="center" className={styles.wrapper} direction="row" gap="8px">
      <Time>{isRecruiting ? formattedTime(dates) : 0}</Time>
      <Text>일</Text>
      <Time>{isRecruiting ? formattedTime(hours) : 0}</Time>
      <Text>시간</Text>
      <Time>{isRecruiting ? formattedTime(minutes) : 0}</Time>
      <Text>분</Text>
      <Time>{isRecruiting ? formattedTime(seconds) : 0}</Time>
      <Text>초</Text>
    </Flex>
  );
}

export default Timer;
