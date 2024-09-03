import { debounce } from '@/libs/utils/tick';

const SCROLL_HIDDEN_TIME = 300;
const DEBOUNCE_WAIT_TIME = 100;

export const getScrollObserver = <T extends (...args: unknown[]) => unknown>(
  func: T,
) => {
  let isObserving = false;

  const debounced = debounce(() => {
    func();
    setTimeout(func, SCROLL_HIDDEN_TIME);
  }, DEBOUNCE_WAIT_TIME);

  return {
    start() {
      if (!isObserving) {
        window.addEventListener('scroll', debounced, true);
        isObserving = true;
      }
    },
    stop() {
      if (isObserving) {
        window.removeEventListener('scroll', debounced, true);
        isObserving = false;
      }
    },
    isObserving() {
      return isObserving;
    },
  };
};
