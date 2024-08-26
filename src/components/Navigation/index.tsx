import { AnimatePresence } from 'framer-motion';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SipeLogo } from '@/assets/logos';
import { JOIN_FORM_URL } from '@/constants/recruit';
import useDeviceType from '@/hook/useDeviceType';

import Button from '../common/Button';
import HamburgerButton from '../HamburgerButton';
import Layout from '../Layout';
import styles from './index.module.scss';
import * as S from './styled';

const menus: { name: string; path: Route }[] = [
  { name: 'About', path: '/about' },
  { name: 'Recruit', path: '/recruit' },
  { name: 'People', path: '/people' },
  { name: 'Activity', path: '/activity' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const { isDesktop } = useDeviceType();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuVariant = {
    opened: {
      height: 'auto',
      transition: {
        delay: 0.15,
        duration: 1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      height: 0,
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.1,
      },
    },
    closed: { opacity: 0 },
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <S.Wrapper>
      <Layout>
        <div className={styles.group}>
          <Link href="/">
            <SipeLogo />
          </Link>
          {isDesktop ? (
            <div className={styles.buttons}>
              <div className={styles.menus}>
                {menus.map((menu) => (
                  <Button
                    key={menu.name}
                    buttonType="menu"
                    href={menu.path}
                    active={menu.path === pathname}
                  >
                    {menu.name}
                  </Button>
                ))}
              </div>
              <Button isExternalLink href={JOIN_FORM_URL} buttonType="apply">
                Join Us
              </Button>
            </div>
          ) : (
            <HamburgerButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isOpened={isMobileMenuOpen}
            />
          )}
        </div>
        <AnimatePresence>
          {!isDesktop && (
            <S.MobileMenus
              initial="closed"
              animate={isMobileMenuOpen ? 'opened' : 'closed'}
              variants={mobileMenuVariant}
            >
              <S.MenuList variants={fadeInVariant}>
                {menus.map((menu) => (
                  <Button
                    key={menu.name}
                    buttonType="menu"
                    active={menu.path === pathname}
                    href={menu.path}
                  >
                    {menu.name}
                  </Button>
                ))}
                <Button isExternalLink href={JOIN_FORM_URL} buttonType="apply">
                  Join Us
                </Button>
              </S.MenuList>
            </S.MobileMenus>
          )}
        </AnimatePresence>
      </Layout>
    </S.Wrapper>
  );
}
