import { usePathname } from 'next/navigation';

import Github from '@/assets/github.svg';
import Instagram from '@/assets/instagram.svg';
// import { ReactComponent as Linkedin } from '@/assets/linkedin.svg';
// import { ReactComponent as Youtube } from '@/assets/youtube.svg';
import useDeviceType from '@/hook/useDeviceType';

import Layout from '../Layout';
import * as S from './styled';

const sns = [
  {
    id: 1,
    name: 'Instagram',
    url: 'https://www.instagram.com/sipe_team/',
    icon: <Instagram />,
  },
  {
    id: 2,
    name: 'Github',
    url: 'https://github.com/sipe-team',
    icon: <Github />,
  },
  // { id: 3, name: 'Youtube', url: '', icon: <Youtube /> },
  // { id: 4, name: 'Linkedin', url: '', icon: <Linkedin /> },
];

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
            {sns.map((s) => (
              <S.Icon
                key={s.id}
                color={color}
                onClick={() => {
                  window.open(s.url);
                }}
              >
                {s.icon}
              </S.Icon>
            ))}
          </S.Logos>
        </S.Group>
      </Layout>
    </S.Wrapper>
  );
}
