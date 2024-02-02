import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ContentWithTitle from '@/components/ContentWithTitle';
import useDeviceType from '@/hook/useDeviceType';

import Button from '../../../../components/Button';
import * as S from './styled';
import * as db from '@/db/index.json';

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

  const [carouselData, setCarouselData] = useState(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    aboutActivity[selectChip].activities
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setCarouselData(aboutActivity[selectChip].activities);
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
      <Swiper
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
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          carouselData?.map((data) => (
            <SwiperSlide>
              <S.Image src={data} />
            </SwiperSlide>
          ))
        }
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          carouselData?.map((data) => (
            <SwiperSlide>
              <S.Image src={data} />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <S.Description>
        <S.DescriptionTitle>2번의 정규 미션 진행</S.DescriptionTitle>
        <S.DescriptionSubTitle>
          활동 회원은 한 기수 동안 2번의 미션을 진행합니다. 본인이 개발자로서
          성장할 수 있는 방법이라면 어떤 방식이든 수용하며, 내부 투표에 따라
          자유롭게 팀을 구성하고 미션을 진행해요.
        </S.DescriptionSubTitle>
      </S.Description>
    </ContentWithTitle>
  );
};

export default Activity;
