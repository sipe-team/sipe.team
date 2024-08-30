'use client';

import { useCallback, useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import ContentWithTitle from '@/components/ContentWithTitle';
import InfiniteScroll from '@/components/InfiniteScroll';
import Layout from '@/components/Layout';
import { ActiveCard } from '@/components/pages/Activity/components/ActiveCard';
import { ActiveVideoCard } from '@/components/pages/Activity/components/ActiveVideoCard';
import type {
  Activity as ActivityData,
  ActivityPost,
  ActivityVideo,
} from '@/db/model';

import styles from './index.module.scss';

type Props = {
  initialActivity: ActivityData;
};

function Activity({ initialActivity }: Props) {
  const [type, setType] = useState<keyof ActivityData>('post');
  const [activities, setActivities] = useState(initialActivity[type]);

  const renderComponent = useCallback(
    (activity: ActivityPost | ActivityVideo) => {
      if (activity.type === 'B') {
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
      }

      return (
        <ActiveVideoCard
          thumbnail={activity.thumbnail}
          contentTitle={activity.title}
          userName={activity.name}
          link={activity.link}
          createDate={activity.date}
        />
      );
    },
    []
  );

  useEffect(() => {
    setActivities(initialActivity[type]);
  }, [type]);

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 활동">
        <div className={styles.typeWrapper}>
          <Button
            className={styles.periodButton}
            buttonType="chip"
            active={type === 'post'}
            onClick={() => setType('post')}
          >
            블로그
          </Button>
          <Button
            className={styles.periodButton}
            buttonType="chip"
            active={type === 'video'}
            onClick={() => setType('video')}
          >
            발표 영상
          </Button>
        </div>
        <div className={styles.wrapper}>
          <InfiniteScroll<ActivityPost | ActivityVideo>
            items={activities}
            className={type === 'post' ? styles.cards : styles.videoCards}
            components={renderComponent}
          />
        </div>
      </ContentWithTitle>
    </Layout>
  );
}

export default Activity;
