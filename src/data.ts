const data = {
  imageCards: [
    {
      src: '/study.svg',
      title: '다양한 방식으로 함께 성장하기!',
      description: `관심사가 비슷한 사람들과 
            스터디, 회고 작성, 사이드 프로젝트 등
            원하는 방식으로 목표를 설정하고 달성해보세요!`,
    },
    {
      src: '/beer.svg',
      title: '다른 개발자들과 재미있게 소통해요!',
      description: `알차게 공부하고 놀면 더 즐겁겠죠?
        뒷풀이, 번개모임 등! 동아리원들과 친해질 수 있는
        기회를 마련해드릴게요!`,
    },
  ],
  recruitment: {
    title: '모집 일정',
    list: [
      '서류 모집 기간 : 5월 19일 ~ 6월 2일',
      '서류 발표 : 6월 14일',
      '인터뷰 진행 : 6월 17일 ~ 6월 25일',
      '최종 합격 발표일 : 6월 28일',
    ],
  },
  qualification: {
    title: '지원 자격',
    list: [
      '관심사가 비슷한 사람들과 함께 기술을 학습하고 공유하며, 성장하고 싶은 개발자',
      '다양한 사람들과 폭넓고 깊이 있는 네트워킹을 원하는 개발자',
      '매주 토요일 오후 2시 ~ 6시에 진행되는 정규 활동에 성실하게 참여할 수 있는 개발자',
    ],
  },
  event: {
    title: '행사 일정',
    list: [
      '행사 기간 : 2023년 7월 8일 ~ 12월 23일 (6개월)',
      '모임 주기 : 2주에 1번씩, 토요일 오후 2시 ~ 오후 6시',
      '참가 비용 : 10,000원 (4회 불참시 퇴출)',
    ],
  },
  schedule: [
    {
      title: 'OT & 1차 미션 선택',
      targetWeeks: [1],
      list: [
        '해당 기간동안 자유롭게 원하는 미션을 제안할 수 있습니다.',
        '여러 미션 중 원하는 미션를 투표합니다. 미션별 인원이 3명이 넘어야 진행할 수 있습니다.',
      ],
    },
    {
      title: '1차 미션 진행',
      targetWeeks: [2, 3, 4, 5],
      list: [
        '각 미션별 조원끼리 어떤 활동을 할지 세부 계획을 산정합니다.',
        '해당 계획대로 매주 모여 활동을 진행합니다.',
        {
          parents:
            '단, 어떤 형태든 매주 진행한 활동에 대한 산출물이 존재해야 합니다.',
          children: [
            '예시) 공유하고 싶은 책의 내용을 정리한 글, 작성한 글을 모아둔 블로그 링크, 서비스 배포 링크, 자격증 취득 인증 등',
          ],
        },
      ],
    },
    {
      title: '1차 미션 공유 & 2차 미션 선택',
      targetWeeks: [6],
      list: [
        '1차 미션 진행기간 동안 나온 산출물을 모아 서로 공유합니다.',
        {
          parents:
            '1차와 동일하게 원하는 미션에 투표 후 2차 미션을 진행합니다.',
          children: [
            '1차 미션을 이어서 진행할 수 있으며, 새로운 미션를 선택할 수도 있습니다.',
          ],
        },
      ],
    },
    {
      title: '2차 미션 진행',
      targetWeeks: [7, 8, 9, 10],
      list: [
        '1차 미션 진행과 동일하게 각 계획에 맞춰 활동을 진행 후, 산출물을 만들어 냅니다.',
      ],
    },
    {
      title: '2차 미션 공유',
      targetWeeks: [11],
      list: [
        '1차 미션 공유와 동일하게, 2차 미션 진행기간 동안 나온 산출물을 모아 서로 공유합니다.',
      ],
    },
    {
      title: '송년회',
      targetWeeks: [12],
      list: [
        '1박 2일로 진행되는 MT입니다.',
        '참가 비용은 별도이며, 원하시는 분만 참석하시면 됩니다. ',
      ],
    },
  ],
  makers: [
    {
      src: '/IMG_이정민.png',
      name: '이정민',
      role: 'Frontend Developer',
    },
    {
      src: '/IMG_조기문.svg',
      name: '조기문',
      role: 'Frontend Developer',
    },
    {
      src: '/IMG_이지원.svg',
      name: '이지원',
      role: 'Frontend Developer',
    },
    {
      src: '/IMG_유현식.svg',
      name: '유현식',
      role: 'IOS Developer',
    },
    {
      src: '/IMG_양효정.svg',
      name: '양효정',
      role: 'Product Designer',
    },
  ],
};

export default data;
