import { ReactComponent as ArrowEvent } from '@/assets/arrow_event.svg';
import data from '@/data';
import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';

const EventBanner = () => {
  const { event } = data;
  const { isDesktop } = useDeviceType();

  return (
    <S.Wrapper>
      <S.Text>
        <S.Title>{event.title}</S.Title>
        <S.Description>
          {event.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </S.Description>
      </S.Text>
      {isDesktop && (
        <S.ArrowIcon>
          <ArrowEvent />
        </S.ArrowIcon>
      )}
    </S.Wrapper>
  );
};

export default EventBanner;
