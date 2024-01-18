import Layout from '@/components/common/Layout';
import PeopleCard from '@/components/PeopleCard';
import useDeviceType from '@/hook/useDeviceType';
import { Wrapper } from '@/pages/Peoples/styled';

import InfiniteScroll from '../../components/common/InfiniteScroll';

const temp = (index: number) => (
  <PeopleCard
    name={`${index}`}
    part="FE"
    links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
    introduce="자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지"
    review="활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지"
  />
);

const peopleCards = Array.from({ length: 100 }).map((_, index) => temp(index));

const Peoples = () => {
  const { isMobile } = useDeviceType();
  return (
    <Layout>
      <Wrapper isMobile={isMobile}>
        <InfiniteScroll items={peopleCards} />
      </Wrapper>
    </Layout>
  );
};

export default Peoples;
