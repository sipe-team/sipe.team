import RecruitBarChart from '../RecruitBarChart';

const rawData = [
  { name: 'BE', value: 28 },
  { name: 'FE', value: 21 },
  { name: 'Full-stack', value: 3 },
  { name: 'AI', value: 3 },
  // { name: 'Android', value: 2 },
  // { name: 'iOS', value: 1 },
  { name: '기타', value: 5, examples: 'Android, iOS, Unity, DevOps 등' },
];

const total = rawData.reduce((sum, item) => sum + item.value, 0);

const data = rawData.map((item) => ({
  ...item,
  percentage: Number(((item.value / total) * 100).toFixed(1)),
}));

function JobRoleChart() {
  return (
    <RecruitBarChart
      title="직군별 분포는 어떻게 되나요?"
      data={data}
      barColor="#FFB24D"
      barWidthMultiplier={20}
    />
  );
}

export default JobRoleChart;
