import JoinButton from '@/components/common/JoinButton';
import * as S from './styled';

const JoinBanner = () => {
  return (
    <S.Wrapper>
      <S.Text>
        <div>SIPE의 1기 멤버 현재 모집중!!</div>
        <div>05/19 (금) ~ 06/02 (금)</div>
      </S.Text>
      <JoinButton size="m" />
    </S.Wrapper>
  );
};

export default JoinBanner;
