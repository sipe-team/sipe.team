import styles from './index.module.scss';

type Props = {
  title: string;
  value: string;
};

function SummaryCardItem({ title, value }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default SummaryCardItem;
