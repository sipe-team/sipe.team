import styles from './index.module.scss';

const summaryData = [
  { title: '누적 지원자 수', value: '400+' },
  { title: '총 참여자 수', value: '101' },
  { title: '누적 미션 수', value: '51' },
];

function SummaryCards() {
  return (
    <div className={styles.summaryCardWrapper}>
      {summaryData.map(({ title, value }) => (
        <div key={title} className={styles.card}>
          <div className={styles.title}>{title}</div>
          <div className={styles.value}>{value}</div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
