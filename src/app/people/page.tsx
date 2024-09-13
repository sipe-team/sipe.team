import People from '@/components/pages/People';
import METADATA from '@/constants/metadata';
import { getPeople } from '@/db';
import { PeopleGeneration } from '@/db/model';
import { getEntries, sortDescending } from '@/libs/utils';

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
  generation?: PeopleGeneration;
};

function Page({ searchParams }: { searchParams?: SearchParams }) {
  const people = getPeople();
  const peopleData = getEntries(people);
  const sortedPeopleGenerations = [...peopleData]
    .sort((a, b) => sortDescending(a[0], b[0]))
    .map(([generation]) => generation);

  const selectedPeopleGeneration = searchParams?.generation || '2';
  const currentPeople = people[selectedPeopleGeneration];

  const sortedCurrentPeople = [...currentPeople].sort((a, b) => {
    if (a.isOrganizer || b.isOrganizer) {
      return 1;
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <People
      currentPeople={sortedCurrentPeople}
      peopleGenerations={sortedPeopleGenerations}
      selectedPeopleGeneration={selectedPeopleGeneration}
    />
  );
}

export default Page;
