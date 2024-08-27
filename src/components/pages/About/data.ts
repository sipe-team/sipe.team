import * as db from '@/db/index.json';

export const introduces = [
  {
    id: 1,
    src: '/assets/intro-1.png',
    badgeText: 'Goal',
    title: '사이프에서의 성장 경험으로 더 멀리 나아갈 수 있기를 바래요.',
    subTitle:
      '좋은 개발자로 성장하기 위한 방식, 필요 역량은 다양하다고 생각해요. 사이드 프로젝트 뿐만 아닌, 여러 형태의 성장 경험을 통해 본인이 원하는 개발자로서의 역량을 쌓아가기를 기대합니다.',
  },
  {
    id: 2,
    src: '/assets/intro-2.png',
    badgeText: 'Mission',
    title: '본인만의 성장 방식을 찾고 나아갈 수 있도록 도와드려요.',
    subTitle:
      '정규 미션, 사이프챗, 사이프톤, 내친소, 사담콘 등 각종 행사를 기획하여 성장할 수 있는 기회를 제공하고 있으며, 이 과정에서 얻은 경험은 글/영상으로 홈페이지에 기재할 수 있어요.',
  },
  {
    id: 3,
    src: '/assets/intro-3.png',
    badgeText: 'Culture',
    title: '사이퍼들의 성장에 긍정적인 영향을끼치는 사람들과 함께하고 싶어요.',
    subTitle:
      '각자가 원하는 목표를 성공적으로 이루기 위해서는 그 과정을 함께하는 사람이 무척 중요하다고 생각합니다. 어떤 면이든 배울 점이 있는 사람과 함께하고 싶어요!',
  },
];

export const faqs = db.faq.about.map((it) => ({
  q: it.question,
  a: it.answer,
}));
