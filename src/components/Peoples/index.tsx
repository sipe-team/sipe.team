import InfiniteScroll from '../common/InfiniteScroll';
import PeopleCard from './PeopleCard';

const Peoples = () => {
  return (
    <InfiniteScroll>
      <PeopleCard />
    </InfiniteScroll>
  );
};

export default Peoples;
