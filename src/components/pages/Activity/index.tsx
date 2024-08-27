'use client';

import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import ContentWithTitle from '@/components/ContentWithTitle';
import InfiniteScroll from '@/components/InfiniteScroll';
import Layout from '@/components/Layout';
import { ActiveCard } from '@/components/pages/Activity/components/ActiveCard';
import * as db from '@/db/index.json';

import { ActiveVideoCard } from './components/ActiveVideoCard';
import styles from './index.module.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ActivityCard = ({ activity }) => {
  return (
    <ActiveCard
      thumbnail={activity.thumbnail}
      profile={activity.profile}
      contentTitle={activity.title}
      contentBody={activity.description}
      userName={activity.name}
      link={activity.link}
      createDate={activity.date}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ActivityVideoCard = ({ activity }) => {
  return (
    <ActiveVideoCard
      thumbnail={activity.thumbnail}
      contentTitle={activity.title}
      userName={activity.name}
      link={activity.link}
      createDate={activity.date}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const activityData = (type) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return db.activities[type];
};

const types = Object.keys(db.activities).map((type) => {
  if (type === 'V') {
    return {
      value: type,
      name: '발표 영상',
    };
  } else {
    return {
      value: type,
      name: '블로그',
    };
  }
});

export default function Activity() {
  const [type, setType] = useState(types[0].value);
  const [acticities, setActivities] = useState(activityData(type));

  useEffect(() => {
    setActivities(activityData(type));
  }, [type]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderComponent = (activity) => {
    if (type === 'B') {
      return <ActivityCard activity={activity} />;
    } else if (type === 'V') {
      return <ActivityVideoCard activity={activity} />;
    }
  };

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 활동">
        <article className={styles.typeWrapper}>
          {types.map((_type, index) => {
            if (_type.value === 'V')
              return (
                <Button
                  key={index}
                  className={styles.periodButton}
                  buttonType="chip"
                  active={_type.value === type}
                  onClick={() => setType(_type.value)}
                >
                  {_type.name}
                </Button>
              );
            return (
              <Button
                key={index}
                className={styles.periodButton}
                buttonType="chip"
                active={_type.value === type}
                onClick={() => setType(_type.value)}
              >
                {_type.name}
              </Button>
            );
          })}
        </article>
        <div className={styles.wrapper}>
          <InfiniteScroll
            items={acticities}
            className={type === 'B' ? styles.cards : styles.videoCards}
            components={(activity) => renderComponent(activity)}
          />
        </div>
      </ContentWithTitle>
    </Layout>
  );
}
