import 'swiper/css';
import 'swiper/css/pagination';

import { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ContentWithTitle from '@/components/ContentWithTitle';
import useDeviceType from '@/hook/useDeviceType';

import Button from '../../../../components/Button';
import { activities } from '../../data';
import * as S from './styled';

const Activity = () => {
  const [selectChip, setSelectChip] = useState<string>('mission');

  const { chips, carouselData } = activities;

  const { isMobile } = useDeviceType();

  return (
    <ContentWithTitle title="주요 활동">
      <S.Menus isMobile={isMobile}>
        {chips.map((chip) => (
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
        {carouselData.map((data) => (
          <SwiperSlide>
            <S.Image src={data.src} />
          </SwiperSlide>
        ))}
        {carouselData.map((data) => (
          <SwiperSlide>
            <S.Image src={data.src} />
          </SwiperSlide>
        ))}
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
