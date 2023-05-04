import * as S from './styled';
import { ReactComponent as LogoFooter } from '@/assets/logo_footer.svg';
import { ReactComponent as Instagram } from '@/assets/instagram.svg';
import { ReactComponent as Facebook } from '@/assets/facebook.svg';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Logos>
        <LogoFooter />
        <S.Sns>
          <Instagram />
          <Facebook />
        </S.Sns>
      </S.Logos>
      <S.Email>Contact : sipe.team@gmail.com</S.Email>
    </S.Wrapper>
  );
};

export default Footer;
