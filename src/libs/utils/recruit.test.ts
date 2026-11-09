import {
  displayApplication,
  getCurrentStatus,
  shouldShowRecruitmentClosedNotice,
} from './recruit';

describe('6기 모집 상태', () => {
  it.each([
    ['2026-11-16T23:59:58+09:00', false],
    ['2026-11-16T23:59:59+09:00', true],
    ['2026-12-31T23:59:59+09:00', true],
    ['2027-01-01T00:00:00+09:00', false],
  ])('%s에 모집 종료 안내 표시 여부는 %s이다', (date, expected) => {
    expect(shouldShowRecruitmentClosedNotice(new Date(date).getTime())).toBe(
      expected,
    );
  });

  it.each([
    ['2026-10-05T00:00:00+09:00', 'before'],
    ['2026-11-01T23:59:59+09:00', 'before'],
    ['2026-11-02T00:00:00+09:00', 'ongoing'],
    ['2026-11-16T23:59:58+09:00', 'ongoing'],
    ['2026-11-16T23:59:59+09:00', 'after'],
    ['2026-11-17T00:00:00+09:00', 'after'],
    ['2026-11-30T23:59:58+09:00', 'after'],
    ['2026-12-01T00:00:00+09:00', 'after'],
  ])('%s에 %s 상태를 반환한다', (date, expected) => {
    expect(getCurrentStatus(new Date(date).getTime())).toBe(expected);
  });

  it('모집 전에는 6기 알림 폼을 연결하고 모집 기간에는 신청 문구로 전환한다', () => {
    expect(displayApplication.before.buttonText).toBe('6기 모집 알림 신청');
    expect(displayApplication.before.formUrl).toBe(
      'https://forms.gle/KxxLCA9db9NgWv4k8',
    );
    expect(displayApplication.ongoing.buttonText).toBe('6기 모집 신청');
    expect(displayApplication.ongoing.formUrl).toBe(
      'https://docs.google.com/forms/d/e/1FAIpQLSdhyMjqq41EL5r-uo_rpXm3e4R-cuW8qbA5r6zM1RfmY9SN-A/viewform?usp=header',
    );
  });

  it('모집 종료 시 7기 모집 알림 신청으로 전환한다', () => {
    const status = getCurrentStatus(
      new Date('2026-11-16T23:59:59+09:00').getTime(),
    );

    expect(displayApplication[status].buttonText).toBe('7기 모집 알림 신청');
    expect(displayApplication[status].formUrl).toBe(
      'https://forms.gle/nAH2kzMNBcaEYnPH9',
    );
    expect(displayApplication[status].dueDate).toBeUndefined();
  });
});
