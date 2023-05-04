import * as S from './styled';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import JoinButton from '../common/JoinButton';

const Header = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.Buttons>
        <S.Anchors>
          <div>About</div>
          <div>1기 지원 안내</div>
          <div>Makers</div>
        </S.Anchors>
        <JoinButton size="s" />
      </S.Buttons>
    </S.Wrapper>
  );
};

export default Header;
