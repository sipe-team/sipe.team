import ContentWithTitle from '@/components/ContentWithTitle';
import Faq from '@/components/Faq';
import Table from '@/components/Table';
import { Applicants, CardList, InActivity } from '@/constants/recruit';
import { getFaq } from '@/db';

import ScheduleCard from './components/ScheduleCard';
import styles from './index.module.scss';

function Recruit() {
  const faq = getFaq();

  return (
    <>
      <ContentWithTitle title="지원자격">
        <Table dataList={Applicants} isApplicant={true} />
      </ContentWithTitle>
      <ContentWithTitle title="모집 일정">
        <div className={styles.cardListWrapper}>
          <div className={styles.cardList}>
            {CardList.map((card) => (
              <ScheduleCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </ContentWithTitle>
      <ContentWithTitle title="활동안내">
        <Table dataList={InActivity} isApplicant={false} />
      </ContentWithTitle>
      <Faq faqs={faq.recruit} />
    </>
  );
}

export default Recruit;
