'use client';

import { ThemeProvider } from '@emotion/react';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Navigation';
import theme from '@/styles/theme';

function ClientProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default ClientProvider;
