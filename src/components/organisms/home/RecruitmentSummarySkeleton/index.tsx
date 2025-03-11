import Timer from '@/components/atoms/Timer';
import SummaryCard from '@/components/organisms/home/SummaryCards';

import styles from './index.module.scss';

type Props = {
  currentStatus: 'before' | 'ongoing' | 'after';
};

function RecruitmentSummary({ currentStatus }: Props) {
  const elements = {
    before: () => (
      <div className={styles.timerWrapper}>
        <div className={styles.timerDescription}>모집 시작까지</div>
        <Timer
          dates={0}
          hours={0}
          minutes={0}
          seconds={0}
          isRecruiting={false}
        />
      </div>
    ),
    ongoing: () => (
      <div className={styles.timerWrapper}>
        <div className={styles.timerDescription}>모집 마감까지</div>
        <Timer
          dates={0}
          hours={0}
          minutes={0}
          seconds={0}
          isRecruiting={false}
        />
      </div>
    ),
    after: () => <SummaryCard />,
  };

  return elements[currentStatus]();
}

export default RecruitmentSummary;
