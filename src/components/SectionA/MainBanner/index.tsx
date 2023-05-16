import { ReactComponent as BannerLogoBig } from '@/assets/banner_logo_big.svg';
import { ReactComponent as BannerLogoSmall } from '@/assets/banner_logo_small.svg';
import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';

const MainBanner = () => {
  const { isMobile } = useDeviceType();

  return (
    <S.Wrapper>
      {isMobile ? <BannerLogoSmall /> : <BannerLogoBig />}
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
