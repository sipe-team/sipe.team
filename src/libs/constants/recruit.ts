export const CURRENT_GENERATION = 4;
export const APPLICATION_START_DATE = new Date('2025-03-11 00:00:00');
export const APPLICATION_DUE_DATE = new Date('2025-03-23 23:59:59');

export const JOIN_FORM_URL = 'https://forms.gle/SPM3xXTVrnvupcLDA';
export const JOIN_ALARM_FORM_URL = 'https://forms.gle/q9wdvKhEyZmTZGS97';
export const JOIN_NEXT_ALARM_FORM_URL = 'https://forms.gle/VS7Ap4xfSyf2qYqQ6';

export const Applicants = [
  {
    text: '격주 토요일 오후 2시 ~ 6시에 진행되는 정규 활동에 성실하게 참여할 수 있는',
  },
  {
    text: '자신의 지식과 경험을 다른 구성원들과 적극적으로 공유하고 소통할 수 있는',
  },
  { text: '다양한 경험을 가진 사람들과 폭넓고 깊이 있는 대화를 나누고 싶은' },
  {
    text: '기술 트렌드에 관심있고 성장을 추구하는 열정적인 개발자',
    highlight: true,
  },
];

export const InActivity = [
  {
    recurring_date: '1회차 (10.12)',
    text: 'OT',
    badge: '',
  },
  {
    recurring_date: '2회차 (10.26)',
    text: 'MT',
    badge: '1차 미션 시작',
  },
  {
    recurring_date: '3회차 (11.09)',
    text: '사이프챗',
    badge: '',
  },
  {
    recurring_date: '4회차 (11.23)',
    text: '사이데이션',
    badge: '',
  },
  {
    recurring_date: '5회차 (12.07)',
    text: '1차 미션 발표',
    badge: '',
  },
  {
    recurring_date: '6회차 (12.21)',
    text: '사담콘',
    badge: '2차 미션 시작',
  },
  {
    recurring_date: '7회차 (01.04)',
    text: '내친소',
    badge: '',
  },
  {
    recurring_date: '8회차 (01.18)',
    text: '사이프톤',
    badge: '',
  },
  {
    recurring_date: '9회차 (02.01)',
    text: '2차 미션 발표',
    badge: '정규 활동 종료',
  },
];

export const CardList = [
  {
    title: '서류 접수',
    processDate: '09.08(일) ~ 09.22(일)',
    subTitle: '23:59:59 마감',
  },
  {
    title: '서류 합격자 발표',
    processDate: '09.27(금)',
    subTitle: '오후 1시 예정',
  },
  {
    title: '오프라인 인터뷰',
    processDate: '10.03(목) ~ 10.06(일)',
    subTitle: '서류합격자 개별연락',
  },

  {
    title: '최종 합격자 발표',
    processDate: '10.08(화)',
    subTitle: '오후 1시 예정',
  },
  {
    title: '정규 활동 시작',
    processDate: '10.12(토)',
    subTitle: 'OT 진행',
  },
];
