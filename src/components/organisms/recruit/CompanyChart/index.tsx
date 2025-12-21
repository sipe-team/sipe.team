import RecruitBarChart from '../RecruitBarChart';

const rawData = [
  {
    name: '대기업',
    value: 18,
    examples: '토스, 네이버, 카카오, 두나무 등',
  },
  {
    name: '스타트업/중견기업',
    value: 34,
    examples: '당근, 무신사, 파수, 팀스파르타 등',
  },
  {
    name: '창업/프리랜서',
    value: 8,
    examples: '프리랜서, 창업 등',
  },
];

const total = rawData.reduce((sum, item) => sum + item.value, 0);

const data = rawData.map((item) => ({
  ...item,
  percentage: Number(((item.value / total) * 100).toFixed(1)),
}));

function CompanyChart() {
  return (
    <RecruitBarChart
      title="회사별 분포는 어떻게 되나요?"
      data={data}
      barColor="#FFB24D"
    />
  );
}

export default CompanyChart;
