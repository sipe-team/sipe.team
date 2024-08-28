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
import * as db from '@/db/index.json';

import styles from './index.module.scss';

const aboutActivity = db.abouts.activity;

const aboutActivityNames = Object.keys(aboutActivity).map((key) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const activity = aboutActivity[key];
  return {
    name: activity.name,
    value: activity.key,
  };
});

const Activity = () => {
  const [selectChip, setSelectChip] = useState<string>(
    aboutActivityNames[0].value
  );

  const [activityData, setActivityData] = useState(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    aboutActivity[selectChip]
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setActivityData(aboutActivity[selectChip]);
  }, [selectChip]);

  return (
    <ContentWithTitle title="주요 활동">
      <div className={styles.menus}>
        {aboutActivityNames.map((chip) => (
          <Button
            className={styles.activityButton}
            key={chip.name}
            buttonType="chip"
            onClick={() => setSelectChip(chip.value)}
            active={chip.value === selectChip}
          >
            {chip.name}
          </Button>
        ))}
      </div>
      <Swiper
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        loop={activityData?.activities?.length > 1 ? true : false}
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
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          activityData?.activities?.map((url, index) => (
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
          ))
        }
      </Swiper>

      <div className={styles.description}>
        <div className={styles.title}>{activityData?.title}</div>
        <div className={styles.subTitle}>{activityData?.description}</div>
      </div>
    </ContentWithTitle>
  );
};

export default Activity;
