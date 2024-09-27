import { useEffect, useMemo, useState } from 'react';

import { useInterval } from 'usehooks-ts';

export default function useTimer(
  dueDate?: number,
  delay: null | number = 1000,
) {
  const [overallTime, setOverallTime] = useState<number>(0);

  useEffect(() => {
    if (dueDate) {
      const now = Date.now();
      const diff = Math.max(0, dueDate - now);
      setOverallTime(Math.floor(diff / 1000));
    }
  }, [dueDate]);

  useInterval(
    () => {
      if (overallTime > 0) {
        setOverallTime((prevTime) => prevTime - 1);
      }
    },
    overallTime > 0 ? delay : null,
  );

  const { dates, hours, minutes, seconds } = useMemo(() => {
    const d = Math.floor(overallTime / 86400);
    const h = Math.floor((overallTime % 86400) / 3600);
    const m = Math.floor((overallTime % 3600) / 60);
    const s = overallTime % 60;
    return { dates: d, hours: h, minutes: m, seconds: s };
  }, [overallTime]);

  return { overallTime, dates, hours, minutes, seconds };
}
