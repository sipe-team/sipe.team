import SummaryCard from '@/components/pages/Home/components/SummaryCard';
import Timer from '@/components/pages/Home/components/Timer';
import useTimer from '@/hook/useTimer';
import { displayApplication } from '@/libs/utils/recruit';

type Props = {
  currentStatus: 'before' | 'ongoing' | 'after';
};

function RecruitmentSummary({ currentStatus }: Props) {
  const isRecruiting = currentStatus !== 'after';
  const currentApplicationDetail = displayApplication[currentStatus];

  const { dates, hours, minutes, seconds } = useTimer(
    currentApplicationDetail?.dueDate,
    isRecruiting ? 1000 : null,
  );

  return (
    <>
      {currentStatus === 'after' ? (
        <SummaryCard />
      ) : (
        <Timer
          dates={dates}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isRecruiting={isRecruiting}
        />
      )}
    </>
  );
}

export default RecruitmentSummary;
