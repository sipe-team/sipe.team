import Activity from '@/components/pages/Activity';
import { getActivity } from '@/db';

function page() {
  const activity = getActivity();

  return <Activity initialActivity={activity} />;
}

export default page;
