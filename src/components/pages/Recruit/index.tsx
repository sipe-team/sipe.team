import ContentWithTitle from '@/components/ContentWithTitle';
import Faq from '@/components/Faq';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import { Applicants, CardList, InActivity } from '@/constants/recruit';
import { getFaq } from '@/db';

import ScheduleCard from './components/ScheduleCard';
import styles from './index.module.scss';

function Recruit() {
  const faq = getFaq();

  return (
    <Layout>
      <ContentWithTitle title="지원자격">
        <Table dataList={Applicants} isApplicant={true} />
      </ContentWithTitle>
      <ContentWithTitle title="모집 일정">
        <div className={styles.cardListWrapper}>
          <div className={styles.cardList}>
            {CardList.map(({ processDate, subTitle, title }) => (
              <ScheduleCard
                key={title}
                processDate={processDate}
                subTitle={subTitle}
                title={title}
              />
            ))}
          </div>
        </div>
      </ContentWithTitle>
      <ContentWithTitle title="활동안내">
        <Table dataList={InActivity} isApplicant={false} />
      </ContentWithTitle>
      <Faq faqs={faq.recruit} />
    </Layout>
  );
}

export default Recruit;
