import { displayApplication, getCurrentStatus } from './recruit';

describe('6기 모집 상태', () => {
  it.each([
    ['2026-10-05T00:00:00+09:00', 'before'],
    ['2026-11-01T23:59:59+09:00', 'before'],
    ['2026-11-02T00:00:00+09:00', 'ongoing'],
    ['2026-11-16T23:59:58+09:00', 'ongoing'],
    ['2026-11-17T00:00:00+09:00', 'after'],
  ])('%s에 %s 상태를 반환한다', (date, expected) => {
    expect(getCurrentStatus(new Date(date).getTime())).toBe(expected);
  });

  it('지원 폼을 설정하기 전에는 모든 상태에서 외부 폼을 연결하지 않는다', () => {
    for (const detail of Object.values(displayApplication)) {
      expect(detail.formUrl).toBeUndefined();
      expect(detail.buttonText).toContain('6기');
      expect(detail.buttonText).not.toContain('7기');
    }

    expect(displayApplication.before.buttonText).toBe('6기 모집 준비 중');
    expect(displayApplication.ongoing.buttonText).toBe('6기 모집 준비 중');
    expect(displayApplication.after.buttonText).toBe('6기 모집 마감');
  });
});
