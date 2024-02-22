import Button from '@/components/Button';
import Layout from '@/components/Layout';
import useDeviceType from '@/hook/useDeviceType';
import { useJoinUs } from '@/hook/useJoinUs';

import Timer from './components/Timer';
import * as S from './styled';

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
  const { handleJoinUs } = useJoinUs();

  return (
    <S.Wrapper backgroundImage="/bg_light.png">
      <S.Group isMobile={isMobile}>
        <Layout>
          <S.Title isMobile={isMobile}>
            <div style={{ textAlign: 'center' }}>
              Sharing Insights <br /> with People Everyday
            </div>
            <div>현직 개발자들이 함께 경험을 쌓으며 성장하는 IT 커뮤니티</div>
          </S.Title>
          {!isMobile && (
            <S.Content>
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
                buttonType="home"
                buttonColor="black"
                onClick={handleJoinUs}
              >
                {isFinished ? '3기 모집 알림 신청' : '2기 모집 신청'}
              </Button>
            </S.Content>
          )}
        </Layout>
        {isMobile && (
          <>
            <S.MobileContent>
              {/* {!isFinished ? (
                <S.Carousels>
                  {carouselItems.map((item) => (
                    <CarouselCard title={item.title} value={item.value} />
                  ))}
                </S.Carousels>
              ) : ( */}
              <Timer dueDate={DUE_DATE.getTime()} isRecruiting={false} />
              {/* )} */}
            </S.MobileContent>
            <Layout>
              <Button
                buttonType="home"
                buttonColor="black"
                onClick={handleJoinUs}
              >
                {isFinished ? '3기 모집 알림 신청' : '2기 모집 신청'}
              </Button>
            </Layout>
          </>
        )}
      </S.Group>
    </S.Wrapper>
  );
}
