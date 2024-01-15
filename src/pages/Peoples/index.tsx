import Layout from '@/components/common/Layout';
import PeopleCard from '@/components/PeopleCard';
import useDeviceType from '@/hook/useDeviceType';
import { Wrapper } from '@/pages/Peoples/styled';

import InfiniteScroll from '../../components/common/InfiniteScroll';

const Peoples = () => {
  const { isMobile } = useDeviceType();
  return (
    <InfiniteScroll>
      <Layout>
        <Wrapper isMobile={isMobile}>
          <PeopleCard
            name="이지원"
            part="FE"
            links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
            introduce="자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지"
            review="활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지"
          />
          <PeopleCard
            name="이지원"
            part="FE"
            links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
            introduce="자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지"
            review="활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지"
          />
          <PeopleCard
            name="이지원"
            part="FE"
            links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
            introduce="자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지"
            review="활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지"
          />
          <PeopleCard
            name="이지원"
            part="FE"
            links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
            introduce="자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지"
            review="활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지"
          />
          <PeopleCard
            name="이지원"
            part="FE"
            links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
            introduce="자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지"
            review="활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지"
          />
          <PeopleCard
            name="이지원"
            part="FE"
            links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
            introduce="자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지"
            review="활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지"
          />
        </Wrapper>
      </Layout>
    </InfiniteScroll>
  );
};

export default Peoples;
