'use client';

import Button from '@/components/common/Button';
import useCopy from '@/hook/useCopy';
import { displayApplication, getCurrentStatus } from '@/utils/recruit';

import useTimer from '../../hooks/useTimer';
import Timer from '../Timer';
import styles from './index.module.scss';

// NOTE: 모집 마감되면 추가되는 UI
// const carouselItems = [
//   {
//     id: 1,
//     title: '누적 지원자 수',
//     value: '200+',
//   },
//   {
//     id: 2,
//     title: '총 참여자 수',
//     value: '100+',
//   },
//   {
//     id: 3,
//     title: '누적 미션 수',
//     value: '14',
//   },
// ];

function RecruitmentStatusSection() {
  const now = Date.now();
  const currentStatus = getCurrentStatus(now);
  const currentApplicationDetail = displayApplication[currentStatus];
  const { copyToClipboard } = useCopy('링크를 복사했어요. 🔗');

  const isRecruiting = currentStatus !== 'after';

  const { dates, hours, minutes, seconds } = useTimer(
    currentApplicationDetail?.dueDate,
    isRecruiting ? 1000 : null
  );

  const handleClickShareLinkButton = async () => {
    await copyToClipboard('https://sipe.team');
  };

  return (
    <div className={styles.content}>
      {/* {!isFinished ? (
          <S.Carousels>
            {carouselItems.map((item) => (
              <CarouselCard
                key={item.id}
                title={item.title}
                value={item.value}
              />
            ))}
          </S.Carousels>
        ) : ( */}
      <Timer
        dates={dates}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        isRecruiting={isRecruiting}
      />
      <div className={styles.buttonWrapper}>
        <Button
          href={currentApplicationDetail.formUrl}
          isExternalLink
          buttonType="home"
          buttonColor="primary"
        >
          {currentApplicationDetail.buttonText}
        </Button>
        <Button
          buttonType="home"
          buttonColor="white"
          onClick={handleClickShareLinkButton}
        >
          링크 공유하기
        </Button>
      </div>
    </div>
  );
}

export default RecruitmentStatusSection;
