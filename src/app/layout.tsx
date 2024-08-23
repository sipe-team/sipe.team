import { Montserrat } from 'next/font/google';

import ClientProvider from '@/components/ClientProvider';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={montserrat.className}>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
