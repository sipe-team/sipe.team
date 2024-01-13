import useTimer from '../../hooks/useTimer';
import * as S from './styled';

export interface TimerProps {
  /**
   * Date.now()와 같은 형태의 timestamp
   */
  dueDate?: number;
}

export default function Timer({ dueDate }: TimerProps) {
  const { dates, hours, minutes, seconds } = useTimer(dueDate);

  const formattedTime = (number: number) => String(number).padStart(2, '0');

  return (
    <S.Wrapper>
      <S.Time>{formattedTime(dates)}</S.Time>
      <div>일</div>
      <S.Time>{formattedTime(hours)}</S.Time>
      <div>시간</div>
      <S.Time>{formattedTime(minutes)}</S.Time>
      <div>분</div>
      <S.Time>{formattedTime(seconds)}</S.Time>
      <div>초</div>
    </S.Wrapper>
  );
}
