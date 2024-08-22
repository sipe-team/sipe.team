import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

export default function useTimer(dueDate?: number) {
  const [overallTime, setOverallTime] = useState(0);

  const getTimeByDueDate = () => (dueDate ? Date.now() - dueDate : 0);

  const getTime = () => overallTime - getTimeByDueDate();

  useInterval(() => {
    const timeInSeconds = Math.round(getTime() / 1000);
    setOverallTime(timeInSeconds);
  }, 100);

  // 남은 일, 시, 분, 초 계산
  const dates = Math.floor(overallTime / 86400);
  const hours = Math.floor((overallTime - dates * 86400) / 3600);
  const minutes = Math.floor((overallTime - dates * 86400 - hours * 3600) / 60);
  const seconds = overallTime - dates * 86400 - hours * 3600 - minutes * 60;

  return { overallTime, dates, hours, minutes, seconds };
}
