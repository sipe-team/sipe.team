import data from '@/data';
import { ReactComponent as ArrowEvent } from '@/assets/arrow_event.svg';
import * as S from './styled';

const EventBanner = () => {
  const { event } = data;

  return (
    <S.Wrapper>
      <S.Text>
        <S.Title>{event.title}</S.Title>
        <S.Description>
          {event.list.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </S.Description>
      </S.Text>
      <ArrowEvent />
    </S.Wrapper>
  );
};

export default EventBanner;
