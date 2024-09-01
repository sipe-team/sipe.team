'use client';

import Button from '@/components/common/Button';
import {
  JOIN_ALARM_FORM_URL,
  JOIN_FORM_URL,
  JOIN_NEXT_ALARM_FORM_URL,
} from '@/constants/recruit';

import useTimer from '../../hooks/useTimer';
import Timer from '../Timer';
import styles from './index.module.scss';

const CURRENT_GENERATION = 3;
const APPLICATION_START_DATE = new Date('2024-09-08 00:00:00');
const APPLICATION_DUE_DATE = new Date('2024-09-22 23:59:59');

type ApplicationStatusKey = 'before' | 'ongoing' | 'after';
type ApplicationDetail = {
  buttonText: string;
  formUrl: string;
  dueDate: number | undefined;
};

const displayApplication: Record<ApplicationStatusKey, ApplicationDetail> = {
  before: {
    buttonText: `${CURRENT_GENERATION}기 모집 알림 신청`,
    formUrl: JOIN_ALARM_FORM_URL,
    dueDate: APPLICATION_START_DATE.getTime(),
  },
  ongoing: {
    buttonText: `${CURRENT_GENERATION}기 모집 신청`,
    formUrl: JOIN_FORM_URL,
    dueDate: APPLICATION_DUE_DATE.getTime(),
  },
  after: {
    buttonText: `${CURRENT_GENERATION + 1}기 모집 알림 신청`,
    formUrl: JOIN_NEXT_ALARM_FORM_URL,
    dueDate: undefined,
  },
};

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

const getCurrentStatus = (now: number) => {
  if (now < APPLICATION_START_DATE.getTime()) {
    return 'before';
  }

  if (
    now >= APPLICATION_START_DATE.getTime() &&
    now < APPLICATION_DUE_DATE.getTime()
  ) {
    return 'ongoing';
  }

  return 'after';
};

function RecruitmentStatusSection() {
  const now = Date.now();
  const currentStatus = getCurrentStatus(now);
  const currentApplicationDetail = displayApplication[currentStatus];

  const isRecruiting = currentStatus !== 'after';

  const { dates, hours, minutes, seconds } = useTimer(
    currentApplicationDetail?.dueDate,
    isRecruiting ? 1000 : null
  );

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
      <Button
        href={currentApplicationDetail.formUrl}
        isExternalLink
        buttonType="home"
        buttonColor="primary"
      >
        {currentApplicationDetail.buttonText}
      </Button>
    </div>
  );
}

export default RecruitmentStatusSection;
