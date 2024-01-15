import { ReactComponent as RectangleUp } from '@/assets/banner_rectangle1.svg';
import { ReactComponent as RectangleUpMobile } from '@/assets/banner_rectangle1_mobile.svg';
import { ReactComponent as RectangleDown } from '@/assets/banner_rectangle2.svg';
import { ReactComponent as RectangleDownMobile } from '@/assets/banner_rectangle2_mobile.svg';
import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';

const MainBanner = () => {
  const { isMobile } = useDeviceType();

  return (
    <S.Wrapper>
      {isMobile ? (
        <RectangleUpMobile className="rectangle-up" />
      ) : (
        <RectangleUp className="rectangle-up" />
      )}
      <S.Box>
        <div>Next Step of Side Project</div>
        <div>1st Generation</div>
      </S.Box>
      {isMobile ? (
        <RectangleDownMobile className="rectangle-down" />
      ) : (
        <RectangleDown className="rectangle-down" />
      )}
    </S.Wrapper>
  );
};

export default MainBanner;
