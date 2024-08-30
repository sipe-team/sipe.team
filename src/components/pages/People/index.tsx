'use client';

import { useCallback, useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import ContentWithTitle from '@/components/ContentWithTitle';
import InfiniteScroll from '@/components/InfiniteScroll';
import Layout from '@/components/Layout';
import type { People as PeopleData, PeopleFlag, PeopleItem } from '@/db/model';
import { getEntries, sortDescending } from '@/libs/utils';

import UserCard from './components/UserCard';
import styles from './index.module.scss';

type Props = {
  initialPeople: PeopleData;
};

const People = ({ initialPeople }: Props) => {
  const people = getEntries(initialPeople);
  const sortedDescending = [...people].sort((a, b) =>
    sortDescending(a[0], b[0])
  );

  const [flag, setFlag] = useState<PeopleFlag>('2기');
  const [currentPeople, setCurrentPeople] = useState(initialPeople[flag]);

  const renderUserCard = useCallback((people: PeopleItem) => {
    const { github, linkedin, etc } = people;

    const links = getEntries({
      GITHUB: github,
      LINKEDIN: linkedin,
      LINK: etc,
    });

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
  }, []);

  useEffect(() => {
    const sortedCurrentPeople = [...initialPeople[flag]].sort((a, b) => {
      if (a.isOrganizer || b.isOrganizer) {
        return 1;
      }

      return a.name.localeCompare(b.name);
    });

    setCurrentPeople(sortedCurrentPeople);
  }, [flag]);

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 소개">
        <div className={styles.periodsWrapper}>
          {sortedDescending.map(([key]) => (
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
        </div>
        <section className={styles.wrapper}>
          <InfiniteScroll
            items={currentPeople}
            className={styles.contents}
            components={renderUserCard}
          />
        </section>
      </ContentWithTitle>
    </Layout>
  );
};

export default People;
