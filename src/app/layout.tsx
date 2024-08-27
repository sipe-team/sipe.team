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
