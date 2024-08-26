import { usePathname } from 'next/navigation';

import SocialIconLink from '@/components/common/SocialIconLink';
import useDeviceType from '@/hook/useDeviceType';

import Layout from '../Layout';
import * as S from './styled';

type FooterProps = {
  fixed?: boolean;
};

export default function Footer({ fixed = false }: FooterProps) {
  const pathname = usePathname();
  const { isDesktop } = useDeviceType();

  const color = pathname === '/' ? 'black' : 'gray';

  return (
    <S.Wrapper fixed={fixed}>
      <Layout>
        <S.Group isDesktop={isDesktop}>
          <S.Copyright color={color}>All rights reserved ⓒ SIPE</S.Copyright>
          <S.Logos>
            <SocialIconLink
              type="INSTAGRAM"
              url="https://www.instagram.com/sipe_team"
            />
            <SocialIconLink type="GITHUB" url="https://github.com/sipe-team" />
            <SocialIconLink
              type="YOUTUBE"
              url="https://www.youtube.com/@sipe_team"
            />
            <SocialIconLink
              type="LINKEDIN"
              url="https://www.linkedin.com/company/sipe.team"
            />
          </S.Logos>
        </S.Group>
      </Layout>
    </S.Wrapper>
  );
}
