import RecruitBarChart from '../RecruitBarChart';

// 확인된 22명의 연차 비율(11:8:3)을 전체 54명에 비례 적용한 추정치.
// 합계 54명을 유지하도록 반올림: 27명, 20명, 7명.
const rawData = [
  { name: '0~3년차', value: 27 },
  { name: '4~5년차', value: 20 },
  { name: '6년차 이상', value: 7 },
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
