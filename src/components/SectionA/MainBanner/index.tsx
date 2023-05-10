import { ReactComponent as LogoBig } from '@/assets/logo_big.svg';

import * as S from './styled';

const MainBanner = () => {
  return (
    <S.Wrapper>
      <LogoBig />
      <S.Text>
        <div>Next Step of Side Project</div>
        <div>
          직장인 개발자들이 모여 함께 학습하고 소통하는 온오프라인 커뮤니티
        </div>
      </S.Text>
    </S.Wrapper>
  );
};

export default MainBanner;
