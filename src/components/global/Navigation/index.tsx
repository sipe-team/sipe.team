'use client';

import { sendGAEvent } from '@next/third-parties/google';
import clsx from 'clsx';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from '@/components/molecules/Button';
import { SipeLogo } from '@/libs/assets/logos';
import { displayApplication, getCurrentStatus } from '@/libs/utils/recruit';

import Layout from '../../atoms/Layout';
import HamburgerButton from '../HamburgerButton';
import styles from './index.module.scss';

const menus: { name: string; path: Route }[] = [
  { name: 'About', path: '/about' },
  { name: 'Recruit', path: '/recruit' },
  { name: 'People', path: '/people' },
  { name: 'Activity', path: '/activity' },
];

function Navigation() {
  const pathname = usePathname();
  const now = Date.now();
  const currentStatus = getCurrentStatus(now);
  const currentApplicationDetail = displayApplication[currentStatus];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleClickJoinUsButton = () => {
    sendGAEvent('event', 'cilck_join_us_button', {
      screen_name: 'menu',
    });
  };

  return (
    <header className={styles.wrapper}>
      <Layout className={styles.headerLayout}>
        <div className={styles.header}>
          <Link href="/">
            <SipeLogo aria-label="사이프 로고" />
          </Link>
          <HamburgerButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            isOpened={isMobileMenuOpen}
          />
        </div>
        <nav
          className={clsx(
            styles.menuWrapper,
            isMobileMenuOpen ? styles.open : styles.close,
          )}
        >
          <div
            className={clsx(
              styles.menuList,
              isMobileMenuOpen ? styles.open : styles.close,
            )}
          >
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
            <Button
              disabled={currentStatus !== 'ongoing'}
              isExternalLink
              href={currentApplicationDetail.formUrl}
              buttonType="apply"
              onClick={handleClickJoinUsButton}
            >
              Join Us
            </Button>
          </div>
        </nav>
      </Layout>
    </header>
  );
}

export default Navigation;
