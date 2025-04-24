export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay = 0,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): ReturnType<T> => {
    let result;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      result = func(...args);
    }, delay);
    return result as ReturnType<T>;
  };
};

export const throttle = <T extends unknown[]>(
  fun: (...params: T) => unknown,
  delay: number,
) => {
  let flag = true;
  return (...params: T) => {
    if (flag) {
      fun(...params);
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
};
