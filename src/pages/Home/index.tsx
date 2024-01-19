import Button from '@/components/Button';
import Timer from './components/Timer';
import * as S from './styled';
import CarouselCard from './components/CarouselCard';

const DUE_DATE = new Date('2024-03-03:00:00:00');

const carouselItems = [
  {
    title: '누적 지원자 수',
    value: '200+',
  },
  {
    title: '총 참여자 수',
    value: '100+',
  },
  {
    title: '누적 미션 수',
    value: '14',
  },
];

export default function Home() {
  const isFinished = DUE_DATE.getTime() < Date.now();

  return (
    <S.Wrapper>
      <S.Group>
        <S.Title>
          <div>Sharing Insights with People Everyday</div>
          <div>현직 개발자들이 함께 경험을 쌓으며 성장하는 IT 커뮤니티</div>
        </S.Title>
        <S.Content>
          {isFinished ? (
            <S.Carousels>
              {carouselItems.map((item) => (
                <CarouselCard title={item.title} value={item.value} />
              ))}
            </S.Carousels>
          ) : (
            <Timer dueDate={DUE_DATE.getTime()} />
          )}
          <Button type="home" color="green">
            {isFinished ? '3기 모집 알림 신청' : '2기 모집 신청'}
          </Button>
        </S.Content>
      </S.Group>
    </S.Wrapper>
  );
}
