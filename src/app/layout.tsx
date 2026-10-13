import 'src/styles/global.scss';
import 'react-simple-toasts/dist/theme/dark.css';

import { GoogleAnalytics } from '@next/third-parties/google';

import { pretendardFont } from '@/app/_fonts';
import ClientProvider from '@/components/global/ClientProvider';
import SiteChrome from '@/features/forms/SiteChrome';
import { ASSET_VERSION } from '@/libs/constants/assetVersion';
import { DEFAULT_METADATA } from '@/libs/constants/metadata';

export const metadata = DEFAULT_METADATA;

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendardFont.className}>
      <head>
        <link
          rel="icon"
          href={`/favicon.ico?v=${ASSET_VERSION}`}
          type="image/x-icon"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          href={`/apple-icon.png?v=${ASSET_VERSION}`}
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="mask-icon"
          href={`/assets/safari-pinned-tab.svg?v=${ASSET_VERSION}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/assets/favicon-32x32.png?v=${ASSET_VERSION}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/assets/favicon-16x16.png?v=${ASSET_VERSION}`}
        />
      </head>
      <body>
        <ClientProvider>
          <SiteChrome>{children}</SiteChrome>
          {process.env.VERCEL_ENV === 'production' &&
            process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <GoogleAnalytics
                gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
              />
            )}
        </ClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
