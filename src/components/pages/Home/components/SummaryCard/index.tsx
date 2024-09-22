import SummaryCardItem from './components/SummaryCardItem';
import styles from './index.module.scss';

const summaryData = [
  { title: '누적 지원 수', value: '300+' },
  { title: '총 참여자 수', value: '100+' },
  { title: '누적 미션 수', value: '50+' },
];

function SummaryCard() {
  return (
    <div className={styles.wrapper}>
      {summaryData.map((data) => (
        <SummaryCardItem title={data.title} value={data.value} />
      ))}
    </div>
  );
}

export default SummaryCard;
