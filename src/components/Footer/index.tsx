import styled from '@emotion/styled';

import { ReactComponent as Facebook } from '@/assets/facebook.svg';
import { ReactComponent as Instagram } from '@/assets/instagram.svg';
import { ReactComponent as LogoFooter } from '@/assets/logo_footer.svg';
import { mobile } from '@/styles/media-query';

import * as S from './styled';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Logos>
        <StyledLogoFooter />
        <S.Sns>
          <Instagram />
          <Facebook />
        </S.Sns>
      </S.Logos>
      <S.Email>Contact : sipe.team@gmail.com</S.Email>
    </S.Wrapper>
  );
};

const StyledLogoFooter = styled(LogoFooter)`
  ${mobile} {
    width: 82px;
    height: 24px;
  }
`;

export default Footer;
