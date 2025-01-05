import { color, Typography } from '@sipe-team/side';

import styles from './index.module.scss';

const summaryData = [
  { title: '누적 지원자 수', value: '400+' },
  { title: '총 참여자 수', value: '60+' },
  { title: '누적 미션 수', value: '30+' },
];

function SummaryCards() {
  return (
    <div className={styles.summaryCardWrapper}>
      {summaryData.map(({ title, value }) => (
        <div key={title} className={styles.card}>
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
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
