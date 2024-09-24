import SummaryCardItem from './components/SummaryCardItem';
import styles from './index.module.scss';

const summaryData = [
  { title: '누적 지원자 수', value: '400+' },
  { title: '총 참여자 수', value: '60+' },
  { title: '누적 미션 수', value: '30+' },
];

function SummaryCard() {
  return (
    <div className={styles.wrapper}>
      {summaryData.map((data) => (
        <SummaryCardItem
          key={data.title}
          title={data.title}
          value={data.value}
        />
      ))}
    </div>
  );
}

export default SummaryCard;
