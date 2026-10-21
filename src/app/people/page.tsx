import People from '@/components/pages/People';
import { getPeople } from '@/db';
import METADATA from '@/libs/constants/metadata';
import { preparePeople } from '@/libs/utils/people';

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

type SearchParams = {
  generation?: string | string[];
};

function Page({ searchParams }: { searchParams?: SearchParams }) {
  const props = preparePeople(getPeople(), searchParams?.generation);
  return <People {...props} />;
}

export default Page;
