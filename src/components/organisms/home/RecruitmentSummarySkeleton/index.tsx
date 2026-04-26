import { Flex } from '@sipe-team/side';

import Timer from '@/components/atoms/Timer';
import SummaryCard from '@/components/organisms/home/SummaryCards';

import styles from './index.module.scss';

type Props = {
  currentStatus: 'before' | 'ongoing' | 'after';
};

function RecruitmentSummary({ currentStatus }: Props) {
  const elements = {
    before: () => (
      <Flex
        align="center"
        className={styles.timerWrapper}
        direction="column"
        gap="1rem"
      >
        <div className={styles.timerDescription}>모집 시작까지</div>
        <Timer
          dates={0}
          hours={0}
          minutes={0}
          seconds={0}
          isRecruiting={false}
        />
      </Flex>
    ),
    ongoing: () => (
      <Flex
        align="center"
        className={styles.timerWrapper}
        direction="column"
        gap="1rem"
      >
        <div className={styles.timerDescription}>모집 마감까지</div>
        <Timer
          dates={0}
          hours={0}
          minutes={0}
          seconds={0}
          isRecruiting={false}
        />
      </Flex>
    ),
    after: () => <SummaryCard />,
  };

  return elements[currentStatus]();
}

export default RecruitmentSummary;
