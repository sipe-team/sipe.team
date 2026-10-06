export const CURRENT_GENERATION = 6;
export const APPLICATION_START_DATE = new Date('2026-11-02T00:00:00+09:00');
export const APPLICATION_DUE_DATE = new Date('2026-11-16T23:59:59+09:00');

// 지원 폼은 모집 시작 시각부터 신청 버튼에 연결됩니다.
export const JOIN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdhyMjqq41EL5r-uo_rpXm3e4R-cuW8qbA5r6zM1RfmY9SN-A/viewform?usp=header';
export const JOIN_ALARM_FORM_URL = 'https://forms.gle/KxxLCA9db9NgWv4k8';

export type CardListType = {
  title: string;
  processDate: string;
  subTitle: string;
};

export const Applicants = [
  {
    text: '격주 토요일 오후 2시 ~ 6시에 진행되는 정규 활동에 성실하게 참여할 수 있는',
  },
  {
    text: 'AI를 실무에서 적극적으로 써보고 있고, 그 경험을 나눌 수 있는',
  },
  {
    text: '언어·런타임·인프라처럼 기본기를 깊게 파고드는 이야기를 나누고 싶은',
  },
  {
    text: '프론트엔드·백엔드 같은 직군의 경계를 넘어 폭넓게 이야기 나누고 싶은',
  },
  {
    text: '쌓아온 경험을 나누거나 다른 구성원에게 배우며 함께 성장하고 싶은 개발자',
    highlight: true,
  },
];

export const InActivity = [
  {
    recurring_date: '1회차 (01.16)',
    text: 'OT',
    badge: '',
  },
  {
    recurring_date: '2회차 (01.30)',
    text: 'MT',
    badge: '1차 미션 팀 빌딩',
  },
  {
    recurring_date: '3회차 (02.13)',
    text: '라이트닝 토크',
    badge: '',
  },
  {
    recurring_date: '4회차 (02.27)',
    text: '1차 미션 발표',
    badge: '',
  },
  {
    recurring_date: '5회차 (03.13)',
    text: '사이프 파트랩',
    badge: '2차 미션 팀 빌딩',
  },
  {
    recurring_date: '6회차 (03.27)',
    text: '내친소',
    badge: '',
  },
  {
    recurring_date: '7회차 (04.10)',
    text: '2차 미션 발표',
    badge: '',
  },
  {
    recurring_date: '8회차 (04.24)',
    text: '사담콘',
    badge: '',
  },
  {
    recurring_date: '9회차 (05.08)',
    text: '사이프 로그',
    badge: '정규 활동 종료',
  },
];

export const CardList = [
  {
    title: '서류 접수',
    processDate: '11.02(월) ~ 11.16(월)',
    subTitle: '2026년 11월 16일 23:59 마감',
  },
  {
    title: '서류 합격자 발표',
    processDate: '11.23(월)',
    subTitle: '합격자 개별 연락',
  },
  {
    title: '오프라인 인터뷰',
    processDate: '12.12(토) ~ 12.13(일)',
    subTitle: '서류합격자 개별연락',
  },

  {
    title: '최종 합격자 발표',
    processDate: '12.21(월)',
    subTitle: '합격자 개별 연락',
  },
  {
    title: '정규 활동 시작',
    processDate: '01.16(토)',
    subTitle: '2027년 OT 진행',
  },
];
