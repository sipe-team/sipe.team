'use client';

import { ReactNode } from 'react';

import { usePathname } from 'next/navigation';

import styles from '@/app/layout.module.scss';
import Footer from '@/components/global/Footer';
import Navigation from '@/components/global/Navigation';

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === '/forms' || pathname.startsWith('/forms/'))
    return <>{children}</>;
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
