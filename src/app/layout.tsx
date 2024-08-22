import { Montserrat } from 'next/font/google';

import ClientProvider from '@/components/ClientProvider';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
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
