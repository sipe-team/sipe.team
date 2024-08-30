import Activity from '@/components/pages/Activity';
import METADATA from '@/constants/metadata';
import { getActivity } from '@/db';

const title = '사이퍼 활동 - SIPE';

export const metadata = {
  metadataBase: METADATA.metadataBase,
  title,
  openGraph: {
    title,
    url: `${METADATA.url}/activity`,
    images: METADATA.images,
  },
  twitter: {
    title,
    images: METADATA.images,
  },
};

function page() {
  const activity = getActivity();

  return <Activity initialActivity={activity} />;
}

export default page;
