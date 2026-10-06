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

  it('모집 전에는 6기 알림 폼을 연결하고 모집 기간에는 신청 문구로 전환한다', () => {
    for (const detail of Object.values(displayApplication)) {
      expect(detail.buttonText).toContain('6기');
      expect(detail.buttonText).not.toContain('7기');
    }

    expect(displayApplication.before.buttonText).toBe('6기 모집 알림 신청');
    expect(displayApplication.before.formUrl).toBe(
      'https://forms.gle/KxxLCA9db9NgWv4k8',
    );
    expect(displayApplication.ongoing.buttonText).toBe('6기 모집 신청');
    expect(displayApplication.ongoing.formUrl).toBe(
      'https://docs.google.com/forms/d/e/1FAIpQLSdhyMjqq41EL5r-uo_rpXm3e4R-cuW8qbA5r6zM1RfmY9SN-A/viewform?usp=header',
    );
    expect(displayApplication.after.formUrl).toBeUndefined();
    expect(displayApplication.after.buttonText).toBe('6기 모집 마감');
  });
});
