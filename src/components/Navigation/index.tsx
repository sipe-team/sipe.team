'use client';

import { track } from '@vercel/analytics';
import clsx from 'clsx';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SipeLogo } from '@/assets/logos';
import Button from '@/components/common/Button';
import { displayApplication, getCurrentStatus } from '@/utils/recruit';

import HamburgerButton from '../HamburgerButton';
import Layout from '../Layout';
import styles from './index.module.scss';

const menus: { name: string; path: Route }[] = [
  { name: 'About', path: '/about' },
  { name: 'Recruit', path: '/recruit' },
  { name: 'People', path: '/people' },
  { name: 'Activity', path: '/activity' },
];

export default function Navigation() {
  const pathname = usePathname();
  const now = Date.now();
  const currentStatus = getCurrentStatus(now);
  const currentApplicationDetail = displayApplication[currentStatus];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleClickJoinUsButton = () => {
    track('ClickJoinUsButton');
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
