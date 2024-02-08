import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import ContentWithTitle from '@/components/ContentWithTitle';
import InfiniteScroll from '@/components/InfiniteScroll';
import Layout from '@/components/Layout';
import Tooltip from '@/components/Tooltip';
import * as db from '@/db/index.json';
import { ActiveCard } from '@/pages/Activity/components/ActiveCard';

import * as S from './styled';

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
      className="card"
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

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 활동">
        <S.TypeWrapper>
          {types.map((_type, index) => {
            if (_type.value === 'V')
              return (
                <Tooltip key={index} title="Comming Soon!">
                  <Button
                    key={index}
                    className="period-button"
                    buttonType="chip"
                    selected={_type.value === type}
                    onClick={() => setType(_type.value)}
                    disabled
                  >
                    {_type.name}
                  </Button>
                </Tooltip>
              );
            return (
              <Button
                key={index}
                className="period-button"
                buttonType="chip"
                selected={_type.value === type}
                onClick={() => setType(_type.value)}
              >
                {_type.name}
              </Button>
            );
          })}
        </S.TypeWrapper>
        <S.Wrapper>
          <InfiniteScroll
            items={acticities}
            className="cards"
            components={(activity) => <ActivityCard activity={activity} />}
          />
        </S.Wrapper>
      </ContentWithTitle>
    </Layout>
  );
}
