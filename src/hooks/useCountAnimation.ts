import { useEffect, useState } from 'react';

interface UseCountAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
  easingFunction?: (progress: number) => number;
}

// 기본 easing 함수들
export const easingFunctions = {
  easeOut: (progress: number) => 1 - Math.pow(1 - progress, 3),
  easeIn: (progress: number) => Math.pow(progress, 3),
  easeInOut: (progress: number) =>
    progress < 0.5
      ? 4 * Math.pow(progress, 3)
      : 1 - Math.pow(-2 * progress + 2, 3) / 2,
  linear: (progress: number) => progress,
};

export function useCountAnimation({
  start = 0,
  end,
  duration = 3000,
  delay = 500,
  enabled = true,
  easingFunction = easingFunctions.easeOut,
}: UseCountAnimationOptions) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // easing 적용
      const easedProgress = easingFunction(progress);

      const currentValue = Math.round(
        startValue + (endValue - startValue) * easedProgress,
      );
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [enabled, start, end, duration, delay, easingFunction]);

  return count;
}
