'use client';

import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Navigation';

function ClientProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      {children}
      <Footer fixed={pathname === '/' || pathname === '/contact'} />
    </div>
  );
}

export default ClientProvider;
