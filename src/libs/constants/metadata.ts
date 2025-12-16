import { Metadata } from 'next';

import { ASSET_VERSION } from './assetVersion';

const title = 'SIPE';
const description = '개발자들이 함께 교류하며 성장하는 IT 커뮤니티';
const images = [`/assets/logos/og-image.png?v=${ASSET_VERSION}`];
const defaultURL = process.env.NEXT_PUBLIC_ORIGIN;
const metadataBase = new URL(defaultURL);

export const DEFAULT_METADATA: Metadata = {
  metadataBase,
  title,
  description,
  openGraph: {
    title,
    description,
    url: defaultURL,
    images,
  },
  twitter: {
    description,
    title,
    images,
  },
};

const METADATA = {
  images,
  metadataBase,
  title,
  url: defaultURL,
  description,
};

export default METADATA;
