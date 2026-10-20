import RecruitBarChart from '../RecruitBarChart';

// https://sipe.team/people?generation=5 — 2026-10-20 공개 프로필 기준.
// 운영진 포함 54명. 복수 직군은 각각 집계하며 비율의 분모는 구성원 수입니다.
const memberCount = 54;
const rawData = [
  { name: 'Backend', value: 23 },
  { name: 'Frontend', value: 23 },
  { name: 'AI', value: 6 },
  { name: 'DevOps', value: 6 },
  {
    name: '기타',
    value: 7,
    examples:
      'Android, iOS, Unity, Embedded, Design, Product Manager, Software engineer',
  },
];

const data = rawData.map((item) => ({
  ...item,
  percentage: Number(((item.value / memberCount) * 100).toFixed(1)),
}));

function JobRoleChart() {
  return (
    <RecruitBarChart
      title="직군별 분포는 어떻게 되나요?"
      data={data}
      barColor="var(--primary)"
      barWidthMultiplier={20}
    />
  );
}

export default JobRoleChart;
