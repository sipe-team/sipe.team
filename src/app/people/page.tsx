import People from '@/components/pages/People';
import { getPeople } from '@/db';

function page() {
  const people = getPeople();

  return <People initialPeople={people} />;
}

export default page;
