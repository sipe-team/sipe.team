import { Flex } from '@sipe-team/side';

import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import Layout from '@/components/atoms/Layout';
import Button from '@/components/molecules/Button';
import ActiveCard from '@/components/organisms/activity/ActiveCard';
import ActiveVideoCard from '@/components/organisms/activity/ActiveVideoCard';
import type {
  Activity as ActivityData,
  ActivityPost,
  ActivityVideo,
} from '@/db/model';

import styles from './index.module.scss';

type Props = {
  activityData: (ActivityPost | ActivityVideo)[];
  currentTab?: keyof ActivityData;
};

function Activity({ activityData, currentTab }: Props) {
  return (
    <Layout>
      <ContentWithTitle title="사이퍼 활동">
        <Flex className={styles.typeWrapper}>
          <Button
            className={styles.periodButton}
            buttonType="chip"
            active={currentTab === 'video'}
            href="/activity?tab=video"
          >
            발표 영상
          </Button>
          <Button
            className={styles.periodButton}
            buttonType="chip"
            active={currentTab === 'post'}
            href="/activity?tab=post"
          >
            블로그
          </Button>
        </Flex>
        <div className={styles.wrapper}>
          {currentTab === 'post' ? (
            <Flex className={styles.cards} direction="column">
              {activityData.map((activity) => (
                <ActiveCard
                  key={activity.link}
                  thumbnail={activity.thumbnail}
                  profile={activity.profile}
                  contentTitle={activity.title}
                  contentBody={activity.description}
                  userName={activity.name}
                  link={activity.link}
                  createDate={activity.date}
                />
              ))}
            </Flex>
          ) : (
            <div
              className={
                currentTab === 'post' ? styles.cards : styles.videoCards
              }
            >
              {activityData.map((activity) => (
                <ActiveVideoCard
                  key={activity.link}
                  thumbnail={activity.thumbnail}
                  contentTitle={activity.title}
                  userName={activity.name}
                  link={activity.link}
                  createDate={activity.date}
                />
              ))}
            </div>
          )}
        </div>
      </ContentWithTitle>
    </Layout>
  );
}

export default Activity;
