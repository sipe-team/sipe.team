import Activity from '@/components/About/ActivitiesSection';
import Introduce from '@/components/About/IntroduceSection';
import Faq from '@/components/Faq';
import * as S from './styled';
import Sponsor from '@/components/About/SponsorSection';

const faqs = [
  {
    q: '정규 세션은 어떻게 진행되나요?',
    a: '정규 세션은 한 달에 2번(격주) 진행되며, 토요일 14시 ~ 18시 사이에 진행되며, 오프라인으로 진행됩니다. 단, 활동 세션에 따라 시간은 변경 될 수 있습니다.',
  },
  {
    q: '미션의 주제는 어떻게 정해지나요?',
    a: '미션의 경우 자신이 원하는 주제를 신청하거나, 다른 사람이 신청한 주제에 대해서 함께 하고 싶다면 참여할 수 있습니다.',
  },
  {
    q: '수료 기준은 어떻게 되나요?',
    a: '2기의 경우 1, 2차 미션 중 한 번이상의 미션 완수 + 출석 점수 (100점 만점 중 70점 이상)인 경우 수료로 인정되며, 출석 점수의 경우 100점 만점을 시작으로 결석인 경우 10점, 지각인 경우 5점씩 차감하여 선정합니다.',
  },
  {
    q: '활동비가 있나요?',
    a: '사이프는 비영리 IT커뮤니티로 2기 활동에 필요한 금액을 활동비로 선정하여 2기 활동 회원들에게 걷습니다. 본 활동비는 2기 활동에 필요한 물품 구매비, 장소 대여비, 서버 및 도메인 유지비에 사용됩니다.',
  },
];

export default function About() {
  return (
    <S.Wrapper>
      <Introduce />
      <Activity />
      <Sponsor />
      <div>
        <Faq faqs={faqs} />
      </div>
    </S.Wrapper>
  );
}
