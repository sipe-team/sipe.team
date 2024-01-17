export function throttle(fun: typeof Function, delay: number) {
  let flag = true;
  return function () {
    if (flag) {
      fun();
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
}
