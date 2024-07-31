import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import ContentWithTitle from '@/components/ContentWithTitle';
import Layout from '@/components/Layout';
import useDeviceType from '@/hook/useDeviceType';

import InfiniteScroll from '../../components/InfiniteScroll';
import * as db from '../../db/index.json';
import UserCard from './components/UserCard';
import * as S from './styled';
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
  const { isMobile } = useDeviceType();
  const [period, setPeriod] = useState(periods[0].value);
  const [peoples, setPeoples] = useState(peopleData(period));

  useEffect(() => {
    setPeoples(peopleData(period));
  }, [period]);

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 소개">
        <S.PeriodsWrapper>
          {periods.map((_period) => (
            <Button
              key={_period.value}
              className="period-button"
              buttonType="chip"
              selected={_period.value === period}
              onClick={() => setPeriod(_period.value)}
            >
              {_period.name}
            </Button>
          ))}
        </S.PeriodsWrapper>
        <S.Wrapper isMobile={isMobile}>
          <InfiniteScroll
            items={peoples}
            className="contents"
            components={(people) => <PeopleCard people={people} />}
          />
        </S.Wrapper>
      </ContentWithTitle>
    </Layout>
  );
};

export default People;
