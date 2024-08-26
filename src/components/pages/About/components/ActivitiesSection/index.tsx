import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';

import ContentWithTitle from '@/components/ContentWithTitle';
import * as db from '@/db/index.json';

import Button from '../../../../common/Button';
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
        loop
        centeredSlides
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1100: {
            slidesPerView: 3,
            spaceBetween: -80,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          activityData?.activities?.map((data, index) => (
            <SwiperSlide key={index}>
              <img className={styles.image} src={data} />
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
