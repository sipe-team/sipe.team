import useTimer from '../../hooks/useTimer';
import * as S from './styled';

export interface TimerProps {
  /**
   * Date.now()와 같은 형태의 timestamp
   */
  dueDate?: number;
  isRecruiting: boolean;
}

export default function Timer({ dueDate, isRecruiting }: TimerProps) {
  const { dates, hours, minutes, seconds } = useTimer(dueDate);

  const formattedTime = (number: number) => String(number).padStart(2, '0');

  return (
    <S.Wrapper>
      <S.Time>{isRecruiting ? formattedTime(dates) : 0}</S.Time>
      <div>일</div>
      <S.Time>{isRecruiting ? formattedTime(hours) : 0}</S.Time>
      <div>시간</div>
      <S.Time>{isRecruiting ? formattedTime(minutes) : 0}</S.Time>
      <div>분</div>
      <S.Time>{isRecruiting ? formattedTime(seconds) : 0}</S.Time>
      <div>초</div>
    </S.Wrapper>
  );
}
