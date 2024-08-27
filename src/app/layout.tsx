import 'src/styles/global.scss';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Montserrat } from 'next/font/google';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { DEFAULT_METADATA } from '@/constants/metadata';

import styles from './layout.module.scss';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = DEFAULT_METADATA;

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={montserrat.className}>
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
        <main className={styles.main}>
          <Navigation />
          {children}
          <Footer />
        </main>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}

export default RootLayout;
