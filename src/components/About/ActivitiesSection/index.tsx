import * as S from './styled';
import { Carousel } from 'react-responsive-carousel';

const Activity = () => {
  return (
    <S.Wrapper>
      <S.Title>주요 활동</S.Title>
      <Carousel autoPlay>
        <div>
          <img src="/IMG_이정민.png" />
        </div>
        <div>
          <img src="/IMG_이지원.png" />
        </div>
        <div>
          <img src="/IMG_조기문.png" />
        </div>
      </Carousel>
      <S.Description>
        <S.DescriptionTitle>2번의 정규 미션 진행</S.DescriptionTitle>
        <S.DescriptionSubTitle>
          활동 회원은 한 기수 동안 2번의 미션을 진행합니다. 본인이 개발자로서
          성장할 수 있는 방법이라면 어떤 방식이든 수용하며, 내부 투표에 따라
          자유롭게 팀을 구성하고 미션을 진행해요.
        </S.DescriptionSubTitle>
      </S.Description>
    </S.Wrapper>
  );
};

export default Activity;
