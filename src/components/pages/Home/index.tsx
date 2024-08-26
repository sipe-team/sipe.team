'use client';

import Button from '@/components/common/Button';
import Layout from '@/components/Layout';
import { JOIN_FORM_URL } from '@/constants/recruit';
import useDeviceType from '@/hook/useDeviceType';

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

  const { isMobile } = useDeviceType();

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${'/bg_light.png'})` }}
    >
      <div className={styles.group}>
        <Layout>
          <div className={styles.title}>
            <div>
              Sharing Insights <br /> with People Everyday
            </div>
            <div>개발자들이 함께 경험을 쌓으며 성장하는 IT 커뮤니티</div>
          </div>
          {!isMobile && (
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
                buttonColor="black"
              >
                {isFinished ? '3기 모집 알림 신청' : '2기 모집 신청'}
              </Button>
            </div>
          )}
        </Layout>
        {isMobile && (
          <>
            <div className={styles.mobileContent}>
              {/* {!isFinished ? (
                <S.Carousels>
                  {carouselItems.map((item) => (
                    <CarouselCard title={item.title} value={item.value} />
                  ))}
                </S.Carousels>
              ) : ( */}
              <Timer dueDate={DUE_DATE.getTime()} isRecruiting={false} />
              {/* )} */}
            </div>
            <Layout>
              <Button
                buttonType="home"
                buttonColor="black"
                href={JOIN_FORM_URL}
                isExternalLink
              >
                {isFinished ? '3기 모집 알림 신청' : '2기 모집 신청'}
              </Button>
            </Layout>
          </>
        )}
      </div>
    </div>
  );
}
