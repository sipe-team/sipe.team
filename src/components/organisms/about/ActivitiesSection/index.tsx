'use client';

import 'swiper/css/bundle';
import 'swiper/css/pagination';

import { useState } from 'react';

import { Flex } from '@sipe-team/side';
import clsx from 'clsx';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import Button from '@/components/molecules/Button';
import Image from '@/components/molecules/Image';
import { getAbout } from '@/db';
import { getEntries } from '@/libs/utils';

import styles from './index.module.scss';

function ActivitiesSection() {
  const { activity } = getAbout();
  const activities = getEntries(activity);

  const [selectChip, setSelectChip] = useState<string>(activities[0][1].key);
  const activityData = activity[selectChip];

  return (
    <ContentWithTitle title="주요 활동">
      <Flex
        className={styles.menus}
        gap={{ sm: '8px', md: '16px' }}
        justify={{ sm: 'flex-start', md: 'center' }}
      >
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
      </Flex>
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
      <Flex
        align="center"
        className={styles.description}
        direction="column"
        gap="16px"
        inline={true}
        justify="center"
      >
        <div className={styles.title}>{activityData?.title}</div>
        <div className={styles.subTitle}>{activityData?.description}</div>
      </Flex>
    </ContentWithTitle>
  );
}

export default ActivitiesSection;
