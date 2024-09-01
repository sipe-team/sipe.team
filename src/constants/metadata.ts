import { Metadata } from 'next';

const title = 'SIPE';
const description = '개발자들이 함께 교류하며 성장하는 IT 커뮤니티';
const images = ['/assets/logos/og-image.png'];
const defaultURL = `https://${process.env.VERCEL_URL}`;
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
