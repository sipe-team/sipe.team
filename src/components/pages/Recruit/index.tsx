import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import Layout from '@/components/atoms/Layout';
import Table from '@/components/molecules/Table';
import Faq from '@/components/organisms/Faq';
import { getFaq } from '@/db';
import { Applicants, CardList, InActivity } from '@/libs/constants/recruit';

import ScheduleCard from '../../organisms/recruit/ScheduleCard';
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
