import { act, renderHook } from '@testing-library/react';

import useApplicationStatus from './useApplicationStatus';

describe('useApplicationStatus', () => {
  afterEach(() => vi.useRealTimers());

  it('열어 둔 페이지에서도 모집 시작과 마감 시각에 상태를 갱신한다', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-11-01T23:59:59+09:00'));
    const { result, unmount } = renderHook(() => useApplicationStatus());
    expect(result.current).toBe('before');

    act(() => vi.advanceTimersByTime(1000));
    expect(result.current).toBe('ongoing');

    vi.setSystemTime(new Date('2026-11-16T23:59:58+09:00'));
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current).toBe('after');

    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
