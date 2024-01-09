import InfiniteScroll from '../common/InfiniteScroll';
import PeopleCard from './PeopleCard';

const Peoples = () => {
  return (
    <InfiniteScroll>
      <PeopleCard name="이지원" part="FE" />
    </InfiniteScroll>
  );
};

export default Peoples;
