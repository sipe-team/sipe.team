import { ReactComponent as Logo } from '@/assets/logo.svg';

import JoinButton from '../common/JoinButton';
import * as S from './styled';

const Header = () => {
  return (
    <S.Wrapper>
      <div>
        <Logo />
        <S.Buttons>
          <S.Anchors>
            <div>About</div>
            <div>1기 지원 안내</div>
            <div>Makers</div>
          </S.Anchors>
          <JoinButton size="s" />
        </S.Buttons>
      </div>
    </S.Wrapper>
  );
};

export default Header;
