import Image from 'next/image';

import Button from '@/components/common/Button';
import { JOIN_FORM_URL } from '@/constants/recruit';

import Timer from './components/Timer';
import styles from './index.module.scss';

const DUE_DATE = new Date('2024-02-17 23:59:59');

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

export default function Home() {
  const isFinished = DUE_DATE.getTime() < Date.now();

  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/home-bg.png"
        alt="배경 이미지"
        sizes="(max-width: 1060px) 100vw, 50vw"
        width={0}
        height={0}
        priority
        className={styles.background}
      />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Sharing Insights <br /> with People Everyday
        </h1>
        <h2 className={styles.subTitle}>
          개발자들이 함께 교류하며 성장하는 IT 커뮤니티
        </h2>
      </div>
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
        <Timer dueDate={DUE_DATE.getTime()} isRecruiting={false} />
        <Button
          href={JOIN_FORM_URL}
          isExternalLink
          buttonType="home"
          buttonColor="primary"
        >
          {isFinished ? '3기 모집 알림 신청' : '2기 모집 신청'}
        </Button>
      </div>
    </div>
  );
}
