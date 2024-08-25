import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import ContentWithTitle from '@/components/ContentWithTitle';
import Layout from '@/components/Layout';

import * as db from '../../../db/index.json';
import InfiniteScroll from '../../InfiniteScroll';
import UserCard from './components/UserCard';
import styles from './index.module.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const PeopleCard = ({ people }) => {
  const links: { type: 'GITHUB' | 'LINKEDIN' | 'LINK'; url: string }[] = [];
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const peopleData = (period) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return db.peoples[period];
};

const periods = Object.keys(db.peoples)
  .sort((a, b) => {
    if (a === 'contribute') return 1;
    if (b === 'contribute') return -1;
    return parseInt(b) - parseInt(a);
  })
  .map((period) => {
    return {
      name: period === 'contribute' ? '기여자' : `${period}기`,
      value: period,
    };
  });

const People = () => {
  const [period, setPeriod] = useState(periods[0].value);
  const [peoples, setPeoples] = useState(peopleData(period));

  useEffect(() => {
    const _peoples = peopleData(period);

    const { organizers, members } = _peoples.reduce(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (acc, cur) => {
        if (cur.isOrganizer) {
          acc.organizers.push(cur);
        } else {
          acc.members.push(cur);
        }
        return acc;
      },
      { organizers: [], members: [] }
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const sortedMembers = members.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    setPeoples([...organizers, ...sortedMembers]);
  }, [period]);

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 소개">
        <article className={styles.periodsWrapper}>
          {periods.map((_period) => (
            <Button
              key={_period.value}
              className={styles.button}
              buttonType="chip"
              selected={_period.value === period}
              onClick={() => setPeriod(_period.value)}
            >
              {_period.name}
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
