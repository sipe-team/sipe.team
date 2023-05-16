import React from 'react';
import ScheduleItem from 'src/components/SectionB/ScheduleItem';

import data from '@/data';

import * as S from './styled';

const EventCard = () => {
  return (
    <S.Wrapper>
      {data.schedule.map((scheduleItem) => {
        const { title, list, targetWeeks } = scheduleItem;

        return (
          <ScheduleItem title={title} list={list} targetWeeks={targetWeeks} />
        );
      })}
    </S.Wrapper>
  );
};

export default EventCard;
