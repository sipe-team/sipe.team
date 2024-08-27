import { MetadataRoute } from 'next';

function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SIPE',
    short_name: 'SIPE',
    description: '개발자들이 함께 교류하며 성장하는 IT 커뮤니티',
    start_url: '/',
    display: 'standalone',
    background_color: '#131518',
    theme_color: '#131518',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/assets/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/assets/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/assets/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

export default manifest;
