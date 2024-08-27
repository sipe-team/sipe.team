import ContentWithTitle from '@/components/ContentWithTitle';
import Faq from '@/components/Faq';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import { Applicants, CardList, InActivity } from '@/constants/recruit';
import * as db from '@/db/index.json';
import useDeviceType from '@/hook/useDeviceType';

import ScheduleCard from './components/ScheduleCard';
import styles from './index.module.scss';

export const faqs = db.faq.recruit.map((it) => ({
  question: it.question,
  answer: it.answer,
  id: it.key,
}));

export default function Recruit() {
  const { isDesktop } = useDeviceType();

  return (
    <>
      <ContentWithTitle title="지원자격">
        <Table dataList={Applicants} isApplicant={true} />
      </ContentWithTitle>
      <ContentWithTitle title="모집 일정">
        {isDesktop ? (
          <div className={styles.cardList}>
            {CardList.map((card, i) => (
              <ScheduleCard key={i} {...card} />
            ))}
          </div>
        ) : (
          <div className={styles.mobileContent}>
            <div className={styles.cardList}>
              {CardList.map((card, i) => (
                <ScheduleCard key={i} {...card} />
              ))}
            </div>
          </div>
        )}
      </ContentWithTitle>
      <Layout>
        <ContentWithTitle title="활동안내">
          <Table dataList={InActivity} isApplicant={false} />
        </ContentWithTitle>
      </Layout>
      <Faq faqs={faqs} />
    </>
  );
}
