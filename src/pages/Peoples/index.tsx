import PeopleCard from '@/components/PeopleCard';

import InfiniteScroll from '../../components/common/InfiniteScroll';

const Peoples = () => {
  return (
    <InfiniteScroll>
      <PeopleCard
        name="이지원"
        part="FE"
        links={[{ type: 'GITHUB', url: 'github.com/KimHunJin' }]}
      />
    </InfiniteScroll>
  );
};

export default Peoples;
