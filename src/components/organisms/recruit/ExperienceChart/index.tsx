import RecruitBarChart from '../RecruitBarChart';

// People 5기 54명 중 자기소개에 전체 경력이 확인되는 22명만 분류.
// 현 직장 근속기간, 교육기간, 취미 경력은 전체 경력으로 추정하지 않음.
const rawData = [
  { name: '0~3년차', value: 11 },
  { name: '4~5년차', value: 8 },
  { name: '6년차 이상', value: 3 },
  { name: '미확인', value: 32 },
];

const total = rawData.reduce((sum, item) => sum + item.value, 0);

const data = rawData.map((item) => ({
  ...item,
  percentage: Number(((item.value / total) * 100).toFixed(1)),
}));

function ExperienceChart() {
  return (
    <RecruitBarChart
      title="연차별 분포는 어떻게 되나요?"
      data={data}
      barColor="var(--primary)"
    />
  );
}

export default ExperienceChart;
