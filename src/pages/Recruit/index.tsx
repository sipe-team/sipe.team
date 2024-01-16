import Faq from '@/components/Faq';
import Table from '@/components/Table';
import * as S from './styled';

const faqs = [
  {
    q: '2기 선발 기준은 어떻게 되나요?',
    a: '사이프는 현재 개발자로 일을 하고 있으며, 자신의 경험을 나누는 것을 좋아하고,  다른 사람의 고민이나 경험들을 경청해줄 사람들을 선발하고 있습니다.',
  },
  {
    q: '현재 개발자로 일은 안하고 있지만 개발 경력이 있는데 참여 가능한가요?',
    a: '아니요! 사이프는 현재 개발자로 근무를 하고 있는 사람이라면 누구든 지원 가능합니다.',
  },
  {
    q: '2기 선발 인원은 몇 명인가요?',
    a: '2기는 총 60명으로 선발할 예정이며, 인원은 지원자 수에 따라서 변동될 수 있습니다',
  },
  {
    q: '수도권에 거주하고 있지 않아도 지원이 가능한가요?',
    a: '가능합니다! 다만, 모든 활동이 수도권에 위치한 오프라인 장소에서 진행 될 예정이며, 결석이나 지각을 하는 경우 수료 조건에 영향이 있을 수 있으니 주의가 필요합니다.',
  },
  {
    q: '미성년자이지만 개발자로 근무하고 있어요. 그래도 지원이 가능한가요?',
    a: '아니요! 아쉽지만 사이프는 미성년자 선발은 제외하고 있습니다.',
  },
];

const Applicants = [
  {
    text: '격주 토요일 오후 2시 ~ 6시에 진행되는 정규 활동에 성실하게 참여할 수 있는',
  },
  {
    text: '관심사가 비슷한 사람들과 함께 기술을 학습하고 공유하며 성장하고 싶은',
  },
  { text: '다양한 경험을 가진 사람들과 폭넓고 깊이 있는 대화를 나누고 싶은' },
  { text: 'SW 개발 경력을 가진 현직 개발자' },
];

const InActivity = [
  {
    recurring_date: '1회차 (03.16)',
    text: 'OT',
    badge: '',
  },
  {
    recurring_date: '2회차 (03.30)',
    text: '사이프챗',
    badge: '1차 미션 시작',
  },
  {
    recurring_date: '3회차 (04.13)',
    text: '액티비티',
    badge: '',
  },
  {
    recurring_date: '4회차 (04.27)',
    text: '사담콘',
    badge: '',
  },
  {
    recurring_date: '5회차 (05.11)',
    text: '1차 미션 발표',
    badge: '',
  },
  {
    recurring_date: '6회차 (05.25)',
    text: '사이프톤',
    badge: '2차 미션 시작',
  },
  {
    recurring_date: '7회차 (06.08)',
    text: '나들이',
    badge: '',
  },
  {
    recurring_date: '8회차 (06.22)',
    text: '내친소',
    badge: '',
  },
  {
    recurring_date: '9회차 (07.06)',
    text: '2차 미션 발표',
    badge: '정규 활동 종료',
  },
];

export default function Recruit() {
  return (
    <S.Wrapper>
      <Table title="지원자격" dataList={Applicants} isApplicant={true} />
      <Table title="활동안내" dataList={InActivity} isApplicant={false} />
      <Faq faqs={faqs} />
    </S.Wrapper>
  );
}
