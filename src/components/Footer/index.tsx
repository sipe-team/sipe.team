import styled from '@emotion/styled';

import { ReactComponent as Instagram } from '@/assets/instagram.svg';
import { ReactComponent as LogoFooter } from '@/assets/logo_footer.svg';
import { mobile } from '@/styles/media-query';

import * as S from './styled';

const Footer = () => {
  return (
    <S.Wrapper id="contact">
      <S.Logos>
        <StyledLogoFooter />
        <S.Sns
          onClick={() => window.open('https://www.instagram.com/sipe_team/')}
        >
          <Instagram />
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
