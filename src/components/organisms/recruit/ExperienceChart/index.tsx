import RecruitBarChart from '../RecruitBarChart';

const rawData = [
  { name: '1~3년차', value: 37 },
  { name: '4~5년차', value: 13 },
  { name: '6년차 이상', value: 10 },
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
      barColor="#FFB24D"
    />
  );
}

export default ExperienceChart;
