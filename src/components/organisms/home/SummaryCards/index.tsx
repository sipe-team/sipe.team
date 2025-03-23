import { color, Flex, Typography } from '@sipe-team/side';

import styles from './index.module.scss';

const summaryData = [
  { title: '누적 지원자 수', value: '400+' },
  { title: '총 참여자 수', value: '101' },
  { title: '누적 미션 수', value: '51' },
];

function SummaryCards() {
  return (
    <Flex className={styles.summaryCardWrapper} direction="row" gap="24px">
      {summaryData.map(({ title, value }) => (
        <Flex
          align="center"
          key={title}
          className={styles.card}
          direction="column"
          gap="12px"
          justify="center"
        >
          <Typography
            color={color.white}
            className={styles.title}
            lineHeight="compact"
            size={18}
            weight="bold"
          >
            {title}
          </Typography>
          <Typography
            color={color.white}
            className={styles.value}
            lineHeight="compact"
            size={32}
            weight="bold"
          >
            {value}
          </Typography>
        </Flex>
      ))}
    </Flex>
  );
}

export default SummaryCards;
