import Layout from '@/components/Layout';
import UserCard from './components/UserCard';
import useDeviceType from '@/hook/useDeviceType';
import { Wrapper } from '@/pages/People/styled';

import InfiniteScroll from '../../components/InfiniteScroll';
import ContentWithTitle from '@/components/ContentWithTitle';

const temp = (index: number) => (
  <UserCard
    name={`${index}`}
    part="FE"
    links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
    introduce="자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지"
    review="활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지"
  />
);

const peopleCards = Array.from({ length: 100 }).map((_, index) => temp(index));

const People = () => {
  const { isMobile } = useDeviceType();

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 소개">
        <Wrapper isMobile={isMobile}>
          <InfiniteScroll items={peopleCards} />
        </Wrapper>
      </ContentWithTitle>
    </Layout>
  );
};

export default People;
