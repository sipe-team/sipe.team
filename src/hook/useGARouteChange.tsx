import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

/**
 * uri 변경 추적 컴포넌트
 * uri가 변경될 때마다 pageview 이벤트 전송
 */
const useGARouteChange = () => {
  const pathname = usePathname();
  const [initialized, setInitialized] = useState(false);

  // localhost는 기록하지 않음
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (key) {
      if (!window.location.href.includes('localhost')) {
        ReactGA.initialize(key);
        setInitialized(true);
      }
    }
  }, []);

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: pathname });
      ReactGA.send('pageview');
    }
  }, [initialized, pathname]);
};

export default useGARouteChange;
