import styled from '@emotion/styled';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import useDeviceType from '@/hook/useDeviceType';
import { mobile } from '@/styles/media-query';

import JoinButton from '../common/JoinButton';
import * as S from './styled';

const Header = () => {
  const { isMobile } = useDeviceType();

  return (
    <S.Wrapper>
      <div style={{ padding: '0 40px' }}>
        <a href="#">
          <StyledLogo />
        </a>
        <S.Buttons>
          {!isMobile && (
            <S.Anchors>
              <a href="#about">About</a>
              <a href="#apply">1기 지원 안내</a>
              <a href="#makers">Makers</a>
            </S.Anchors>
          )}
          <JoinButton size="s" />
        </S.Buttons>
      </div>
    </S.Wrapper>
  );
};

const StyledLogo = styled(Logo)`
  ${mobile} {
    width: 68px;
    height: 20px;
  }
`;

export default Header;
