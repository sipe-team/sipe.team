import Activity from '@/components/pages/Activity';
import METADATA from '@/constants/metadata';
import { getActivity } from '@/db';
import type { Activity as ActivityData } from '@/db/model';

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

type SearchParams = {
  tab: keyof ActivityData;
};

function page({ searchParams }: { searchParams?: SearchParams }) {
  const activity = getActivity();
  const currentActivityTab = searchParams?.tab || 'post';

  const sortedActivity = [...activity[currentActivityTab]].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Activity activityData={sortedActivity} currentTab={currentActivityTab} />
  );
}

export default page;
