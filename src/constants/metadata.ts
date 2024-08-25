import { Metadata } from 'next';

const title = 'SIPE';
const description =
  '기술에 관심있는 모든 개발자들이 모여 함께 학습하고 소통하는 온오프라인 커뮤니티';
const images = ['/assets/logos/og-image.png'];
const metadataBase = new URL(process.env.VERCEL_URL);

export const DEFAULT_METADATA: Metadata = {
  metadataBase,
  title,
  description,
  openGraph: {
    title,
    description,
    url: process.env.VERCEL_URL,
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
  description,
};

export default METADATA;
