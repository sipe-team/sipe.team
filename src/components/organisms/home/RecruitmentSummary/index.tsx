import Timer from '@/components/atoms/Timer';
import SummaryCard from '@/components/organisms/home/SummaryCards';
import useTimer from '@/hook/useTimer';
import { displayApplication } from '@/libs/utils/recruit';

import styles from './index.module.scss';

type Props = {
  currentStatus: 'before' | 'ongoing' | 'after';
};

function RecruitmentSummary({ currentStatus }: Props) {
  const currentApplicationDetail = displayApplication[currentStatus];
  const { dates, hours, minutes, seconds } = useTimer(
    currentApplicationDetail?.dueDate,
    1000,
  );

  const elements = {
    before: () => (
      <div className={styles.timerWrapper}>
        <div className={styles.timerDescription}>모집 시작까지</div>
        <Timer
          dates={dates}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isRecruiting={true}
        />
      </div>
    ),
    ongoing: () => (
      <div className={styles.timerWrapper}>
        <div className={styles.timerDescription}>모집 마감까지</div>
        <Timer
          dates={dates}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isRecruiting={true}
        />
      </div>
    ),
    after: () => <SummaryCard />,
  };

  return elements[currentStatus]();
}

export default RecruitmentSummary;
