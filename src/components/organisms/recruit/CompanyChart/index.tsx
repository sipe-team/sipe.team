import styles from './index.module.scss';

// 5기 자기소개 작성 당시 명시된 소속 회사 예시. 회사 규모는 추정하지 않음.
const companies = [
  '삼성전자',
  '토스',
  '현대오토에버',
  '네이버',
  '두나무',
  '넷마블',
  '우아한형제들',
  '삼정KPMG',
  '펄어비스',
  'Match Group',
  '뤼튼',
  '파수',
];

function CompanyChart() {
  return (
    <section className={styles.wrapper}>
      <h3>어떤 회사에서 함께하나요?</h3>
      <ul className={styles.companies}>
        {companies.map((company) => (
          <li key={company}>{company}</li>
        ))}
      </ul>
    </section>
  );
}
export default CompanyChart;
