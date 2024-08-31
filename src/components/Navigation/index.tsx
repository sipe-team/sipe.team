'use client';

import clsx from 'clsx';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SipeLogo } from '@/assets/logos';
import Button from '@/components/common/Button';
import { JOIN_FORM_URL } from '@/constants/recruit';

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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
            isMobileMenuOpen ? styles.open : styles.close
          )}
        >
          <div
            className={clsx(
              styles.menuList,
              isMobileMenuOpen ? styles.open : styles.close
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
            <Button isExternalLink href={JOIN_FORM_URL} buttonType="apply">
              Join Us
            </Button>
          </div>
        </nav>
      </Layout>
    </header>
  );
}
