import InfiniteScroll from '../common/InfiniteScroll';
import PeopleCard from './PeopleCard';

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
