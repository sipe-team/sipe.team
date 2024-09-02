'use client';

import 'swiper/css/bundle';
import 'swiper/css/pagination';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/common/Button';
import ContentWithTitle from '@/components/ContentWithTitle';
import Image from '@/components/Image';
import { getAbout } from '@/db';
import { getEntries } from '@/libs/utils';

import styles from './index.module.scss';

function ActivitiesSection() {
  const { activity } = getAbout();
  const activities = getEntries(activity);

  const [selectChip, setSelectChip] = useState<string>(activities[0][1].key);
  const [activityData, setActivityData] = useState(activity[selectChip]);

  useEffect(() => {
    setActivityData(activity[selectChip]);
  }, [selectChip]);

  return (
    <ContentWithTitle title="주요 활동">
      <div className={styles.menus}>
        {activities.map(([key, activity]) => (
          <Button
            className={styles.activityButton}
            key={key}
            buttonType="chip"
            onClick={() => setSelectChip(activity.key)}
            active={activity.key === selectChip}
          >
            {activity.name}
          </Button>
        ))}
      </div>
      <Swiper
        loop={activityData.activities.length > 1 ? true : false}
        className={styles.swiper}
        centeredSlides
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        pagination={{
          enabled: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet,
        }}
        breakpoints={{
          780: {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
              enabled: false,
            },
          },
        }}
        modules={[Pagination, Autoplay, EffectCoverflow]}
      >
        {activityData.activities.map((url, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <Image
                className={clsx(styles.image, isActive && styles.active)}
                src={url}
                alt="activity"
                objectFit="cover"
                fill
                loading="lazy"
                height={240}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.description}>
        <div className={styles.title}>{activityData?.title}</div>
        <div className={styles.subTitle}>{activityData?.description}</div>
      </div>
    </ContentWithTitle>
  );
}

export default ActivitiesSection;
