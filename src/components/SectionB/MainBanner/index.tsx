import styled from '@emotion/styled';

import { ReactComponent as dome3 } from '@/assets/dome3.svg';
import { ReactComponent as frame57 } from '@/assets/frame57.svg';
import { ReactComponent as frame59 } from '@/assets/frame59.svg';
import { ReactComponent as mask_group2 } from '@/assets/mask_group2.svg';
import { ReactComponent as rectangle84 } from '@/assets/rectangle84.svg';
import { ReactComponent as rectangle85 } from '@/assets/rectangle85.svg';
import { ReactComponent as shape } from '@/assets/shape.svg';
import { ReactComponent as torus } from '@/assets/torus.svg';

import * as S from './styled';

const MainBanner = () => {
  return (
    <S.Wrapper>
      <S.Box>
        <div>Next Step of Side Project</div>
        <div>1st Generation</div>
        {/*<StyledDome3 />*/}
        {/*<StyledFacebook />*/}
        {/*<StyledFrame57 />*/}
        {/*<StyledFrame59 />*/}
        {/*<StyledMask_group2 />*/}
        {/*<StyledRectangle84 />*/}
        {/*<StyledRectangle85 />*/}
        {/*<StyledShape />*/}
        {/*<StyledTorus />*/}
      </S.Box>
    </S.Wrapper>
  );
};

const StyledDome3 = styled(dome3)`
  left: 420.38px;
  top: 582.56px;
  filter: blur(0.5px);
  transform: rotate(165deg);
`;

const StyledFrame57 = styled(frame57)`
  width: 213px;
  height: 213px;
  left: 1132px;
  top: 396px;
  filter: blur(2px);
`;
const StyledFrame59 = styled(frame59)``;
const StyledMask_group2 = styled(mask_group2)``;
const StyledRectangle84 = styled(rectangle84)``;
const StyledRectangle85 = styled(rectangle85)``;
const StyledShape = styled(shape)``;
const StyledTorus = styled(torus)`
  position: relative;
  width: 497.2px;
  height: 512.28px;
  left: 453px;
  top: 122.44px;
`;

export default MainBanner;
