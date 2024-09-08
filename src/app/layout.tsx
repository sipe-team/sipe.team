import 'src/styles/global.scss';
import 'react-simple-toasts/dist/theme/dark.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { pretendardFont } from '@/app/_fonts';
import ClientProvider from '@/components/ClientProvider';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { DEFAULT_METADATA } from '@/constants/metadata';

import styles from './layout.module.scss';

export const metadata = DEFAULT_METADATA;

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendardFont.className}>
      <head>
        <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
      </head>
      <body>
        <ClientProvider>
          <Navigation />
          <main className={styles.main}>{children}</main>
          <Footer />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          <Analytics />
          <SpeedInsights />
        </ClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
