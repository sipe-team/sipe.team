import ContentWithTitle from '@/components/ContentWithTitle';
import Faq from '@/components/Faq';
import Table from '@/components/Table';
import { Applicants, CardList, InActivity } from '@/constants/recruit';
import * as db from '@/db/index.json';

import ScheduleCard from './components/ScheduleCard';
import styles from './index.module.scss';

export default function Recruit() {
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
      <Faq faqs={db.faq.recruit} />
    </>
  );
}
