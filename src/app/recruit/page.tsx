import Recruit from '@/components/pages/Recruit';
import METADATA from '@/constants/metadata';

const title = '3기 사이퍼 모집 - SIPE';

export const metadata = {
  metadataBase: METADATA.metadataBase,
  title,
  openGraph: {
    title,
    url: `${METADATA.url}/recruit`,
    images: METADATA.images,
  },
  twitter: {
    title,
    images: METADATA.images,
  },
};

function Page() {
  return <Recruit />;
}

export default Page;
