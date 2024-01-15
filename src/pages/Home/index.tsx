import Button from '@/components/Button';
import Timer from './components/Timer';
import * as S from './styled';

const DUE_DATE = new Date('2024-03-03:00:00:00');

export default function Home() {
  return (
    <S.Wrapper>
      <S.Group>
        <S.Title>
          <div>Sharing Insights with People Everyday</div>
          <div>현직 개발자들이 함께 경험을 쌓으며 성장하는 IT 커뮤니티</div>
        </S.Title>
        <S.Content>
          <Timer dueDate={DUE_DATE.getTime()} />
          <Button type="home" color="green">
            2기 모집 신청
          </Button>
        </S.Content>
      </S.Group>
    </S.Wrapper>
  );
}
