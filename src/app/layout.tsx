import 'src/styles/global.scss';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Montserrat } from 'next/font/google';

import ClientProvider from '@/components/ClientProvider';
import { DEFAULT_METADATA } from '@/constants/metadata';

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
        <ClientProvider>{children}</ClientProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}

export default RootLayout;
