import About from '@/components/pages/About';
import METADATA from '@/libs/constants/metadata';

const title = '사이프 소개 - SIPE';

export const metadata = {
  metadataBase: METADATA.metadataBase,
  title,
  openGraph: {
    title,
    url: `${METADATA.url}/about`,
    images: METADATA.images,
  },
  twitter: {
    title,
    images: METADATA.images,
  },
};

function Page() {
  return <About />;
}

export default Page;
