import { AnimatePresence } from 'framer-motion';
import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { SipeLogo } from '@/assets/logos';
import useDeviceType from '@/hook/useDeviceType';
import { useJoinUs } from '@/hook/useJoinUs';

import Button from '../common/Button';
import { ApplyButton } from '../common/Button/styled';
import HamburgerButton from '../HamburgerButton';
import Layout from '../Layout';
import styles from './index.module.scss';
import * as S from './styled';

const menus = [
  { name: 'About', path: '/about' },
  { name: 'Recruit', path: '/recruit' },
  { name: 'People', path: '/people' },
  { name: 'Activity', path: '/activity' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const { isDesktop } = useDeviceType();
  const router = useRouter();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { handleJoinUs } = useJoinUs();

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    router.push(path as Route);
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClickJoinButton = () => {
    setIsMobileMenuOpen(false);
    handleJoinUs();
  };

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

  return (
    <S.Wrapper>
      <Layout>
        <div className={styles.group}>
          <div
            onClick={() => handleNavigate('/')}
            style={{ cursor: 'pointer' }}
          >
            <SipeLogo />
          </div>
          {isDesktop ? (
            <div className={styles.buttons}>
              <div className={styles.menus}>
                {menus.map((menu) => (
                  <Button
                    key={menu.name}
                    buttonType="menu"
                    selected={menu.path === pathname}
                    onClick={() => handleNavigate(menu.path)}
                  >
                    {menu.name}
                  </Button>
                ))}
              </div>
              <ApplyButton
                isDesktop={isDesktop}
                onClick={handleClickJoinButton}
              >
                Join Us
              </ApplyButton>
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
                {/* <S.MenuList> */}
                {menus.map((menu) => (
                  <Button
                    key={menu.name}
                    buttonType="menu"
                    selected={menu.path === pathname}
                    onClick={() => handleNavigate(menu.path)}
                  >
                    {menu.name}
                  </Button>
                ))}
                <ApplyButton
                  isDesktop={isDesktop}
                  onClick={handleClickJoinButton}
                >
                  Join Us
                </ApplyButton>
              </S.MenuList>
            </S.MobileMenus>
          )}
        </AnimatePresence>
      </Layout>
    </S.Wrapper>
  );
}
