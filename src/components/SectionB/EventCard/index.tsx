import React from 'react';
import ScheduleItem from 'src/components/SectionB/ScheduleItem';

import data from '@/data';
import useDeviceType, { DEVICE_TYPE } from '@/hook/useDeviceType';

import * as S from './styled';

const LEFT_SECTION_ITEM_HEIGHT = {
  [DEVICE_TYPE.DESKTOP]: [114, 166, 140, 166, 88, 114],
  [DEVICE_TYPE.MOBILE]: [127, 194, 142, 134, 89, 93],
} as const;

const EventCard = () => {
  const { isMobile } = useDeviceType();
  const leftSectionItemHeightArray =
    LEFT_SECTION_ITEM_HEIGHT[
      isMobile ? DEVICE_TYPE.MOBILE : DEVICE_TYPE.DESKTOP
    ];

  return (
    <S.Wrapper>
      {data.schedule.map((scheduleItem, index) => {
        const { title, list, targetWeeks } = scheduleItem;

        return (
          <ScheduleItem
            title={title}
            list={list}
            targetWeeks={targetWeeks}
            height={leftSectionItemHeightArray[index]}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default EventCard;
