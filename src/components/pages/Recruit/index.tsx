import { Flex } from '@sipe-team/side';

import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import Layout from '@/components/atoms/Layout';
import Table from '@/components/molecules/Table';
import Faq from '@/components/organisms/Faq';
import ScheduleCard from '@/components/organisms/recruit/ScheduleCard';
import { getFaq } from '@/db';
import { Applicants, CardList, InActivity } from '@/libs/constants/recruit';

import styles from './index.module.scss';

function Recruit() {
  const faq = getFaq();

  return (
    <Layout>
      <ContentWithTitle title="지원자격">
        <Table dataList={Applicants} isApplicant={true} />
      </ContentWithTitle>
      <ContentWithTitle title="모집 일정">
        <Flex
          align="center"
          className={styles.cardListWrapper}
          justify="flex-start"
          wrap="wrap"
        >
          <Flex
            align="center"
            className={styles.cardList}
            direction="row"
            gap="20px"
            inline={true}
            justify="stretch"
            wrap="nowrap"
          >
            {CardList.map(({ processDate, subTitle, title }) => (
              <ScheduleCard
                key={title}
                processDate={processDate}
                subTitle={subTitle}
                title={title}
              />
            ))}
          </Flex>
        </Flex>
      </ContentWithTitle>
      <ContentWithTitle title="활동안내">
        <Table dataList={InActivity} isApplicant={false} />
      </ContentWithTitle>
      <Faq faqs={faq.recruit} />
    </Layout>
  );
}

export default Recruit;
