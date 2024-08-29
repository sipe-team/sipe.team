'use client';

import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import { type LogoType } from '@/components/common/SocialIconLink';
import ContentWithTitle from '@/components/ContentWithTitle';
import Layout from '@/components/Layout';
import type { People as PeopleData, PeopleFlag, PeopleItem } from '@/db/model';
import { getEntries } from '@/libs/utils';

import InfiniteScroll from '../../InfiniteScroll';
import UserCard from './components/UserCard';
import styles from './index.module.scss';

const PeopleCard = ({ people }: { people: PeopleItem }) => {
  // TODO - refactoring
  const links: { type: LogoType; url: string }[] = [];
  if (people.github) {
    links.push({
      type: 'GITHUB',
      url: people.github,
    });
  }

  if (people.linkedin) {
    links.push({
      type: 'LINKEDIN',
      url: people.linkedin,
    });
  }

  if (people.etc) {
    links.push({
      type: 'LINK',
      url: people.etc,
    });
  }

  return (
    <UserCard
      key={people.id}
      period={people.period}
      img={people.thumbnail}
      name={people.name}
      part={people.part}
      links={links}
      introduce={people.introduce}
      review={people.review}
      isOrganizer={people.isOrganizer}
    />
  );
};

type Props = {
  initialPeople: PeopleData;
};

const People = ({ initialPeople }: Props) => {
  const people = getEntries(initialPeople);
  const [flag, setFlag] = useState<PeopleFlag>('2기');
  const [peoples, setPeoples] = useState(initialPeople[flag]);

  useEffect(() => {
    const _peoples = initialPeople[flag];

    // TODO - refactoring
    const { organizers, members } = _peoples.reduce(
      (acc, cur) => {
        if (cur.isOrganizer) {
          acc.organizers.push(cur);
        } else {
          acc.members.push(cur);
        }
        return acc;
      },
      { organizers: [], members: [] } as {
        organizers: PeopleItem[];
        members: PeopleItem[];
      }
    );

    const sortedMembers = members.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    setPeoples([...organizers, ...sortedMembers]);
  }, [flag]);

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 소개">
        <article className={styles.periodsWrapper}>
          {people.map(([key]) => (
            <Button
              key={key}
              className={styles.button}
              buttonType="chip"
              active={key === flag}
              onClick={() => setFlag(key)}
            >
              {key}
            </Button>
          ))}
        </article>
        <article className={styles.wrapper}>
          <InfiniteScroll
            items={peoples}
            className={styles.contents}
            components={(people) => <PeopleCard people={people} />}
          />
        </article>
      </ContentWithTitle>
    </Layout>
  );
};

export default People;
