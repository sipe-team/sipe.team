import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import ContentWithTitle from '@/components/ContentWithTitle';
import * as db from '@/db/index.json';
import useDeviceType from '@/hook/useDeviceType';

import Button from '../../../../common/Button';
import * as S from './styled';

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

  const { isMobile } = useDeviceType();

  return (
    <ContentWithTitle title="주요 활동">
      <S.Menus isMobile={isMobile}>
        {aboutActivityNames.map((chip) => (
          <Button
            className="activity-button"
            key={chip.name}
            buttonType="chip"
            onClick={() => setSelectChip(chip.value)}
            selected={chip.value === selectChip}
          >
            {chip.name}
          </Button>
        ))}
      </S.Menus>
      <S.SwiperContainer
        loop={true}
        centeredSlides={true}
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
              <S.Image src={data} />
            </SwiperSlide>
          ))
        }
      </S.SwiperContainer>

      <S.Description>
        <S.DescriptionTitle>{activityData?.title}</S.DescriptionTitle>
        <S.DescriptionSubTitle>
          {activityData?.description}
        </S.DescriptionSubTitle>
      </S.Description>
    </ContentWithTitle>
  );
};

export default Activity;
