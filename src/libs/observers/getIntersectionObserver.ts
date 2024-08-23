import { RefObject } from 'react';

export const intersection = <T extends (...args: unknown[]) => unknown>(
  func: T
) => {
  return (entries: IntersectionObserverEntry[]) => {
    entries.forEach(({ isIntersecting }) => {
      if (isIntersecting) {
        func();
      }
    });
  };
};

export const getIntersectionObserver = <
  K extends HTMLElement,
  T extends (...args: unknown[]) => unknown
>(
  ref: RefObject<K>,
  func: T,
  options?: IntersectionObserverInit
) => {
  if (!ref || !ref.current) {
    console.error('target is not defined');
    return;
  }

  const target: HTMLElement = ref.current;

  const observer = new IntersectionObserver(
    intersection(func),
    options || {
      root: null,
      rootMargin: '1px',
      threshold: [1.0],
    }
  );

  return {
    start() {
      observer.observe(target);
    },
    stop() {
      observer.unobserve(target);
    },
    disconnect() {
      observer.disconnect();
    },
  };
};
