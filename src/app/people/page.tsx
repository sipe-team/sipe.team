import People from '@/components/pages/People';
import METADATA from '@/constants/metadata';
import { getPeople } from '@/db';

const title = '사이퍼 소개 - SIPE';

export const metadata = {
  metadataBase: METADATA.metadataBase,
  title,
  openGraph: {
    title,
    url: `${METADATA.url}/people`,
    images: METADATA.images,
  },
  twitter: {
    title,
    images: METADATA.images,
  },
};

function page() {
  const people = getPeople();

  return <People initialPeople={people} />;
}

export default page;
