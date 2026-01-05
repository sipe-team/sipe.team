import { MetadataRoute } from 'next';

import { ASSET_VERSION } from '@/libs/constants/assetVersion';

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
        src: `/favicon.ico?v=${ASSET_VERSION}`,
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: `/assets/favicon-16x16.png?v=${ASSET_VERSION}`,
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: `/assets/favicon-32x32.png?v=${ASSET_VERSION}`,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: `/assets/android-chrome-192x192.png?v=${ASSET_VERSION}`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: `/assets/android-chrome-512x512.png?v=${ASSET_VERSION}`,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

export default manifest;
