import { Flex } from '@sipe-team/side';

import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import DraggableContainer from '@/components/atoms/DraggableContainer';
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
        <DraggableContainer
          ariaLabel="모집 일정 스크롤 영역"
          className={styles.cardListWrapper}
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
        </DraggableContainer>
      </ContentWithTitle>
      <ContentWithTitle title="활동안내">
        <Table dataList={InActivity} isApplicant={false} />
      </ContentWithTitle>
      <Faq faqs={faq.recruit} />
    </Layout>
  );
}

export default Recruit;
