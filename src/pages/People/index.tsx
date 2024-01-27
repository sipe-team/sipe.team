import ContentWithTitle from '@/components/ContentWithTitle';
import Layout from '@/components/Layout';
import useDeviceType from '@/hook/useDeviceType';
import { Wrapper } from '@/pages/People/styled';

import InfiniteScroll from '../../components/InfiniteScroll';
import UserCard from './components/UserCard';
import * as db from '../../db/index.json';

const peopleCards = db.peoples.map((people, index) => {
  const links: { type: 'GITHUB' | 'LINKEDIN' | 'LINK'; url: string }[] = [];
  if (people.github) {
    links.push({
      type: 'GITHUB',
      url: people.github,
    });
  }

  if (people.linkedin) {
    links.push({
      type: 'LINKEDIN',
      url: people.linkedin,
    });
  }

  if (people.etc) {
    links.push({
      type: 'LINK',
      url: people.etc,
    });
  }

  return (
    <UserCard
      key={people.id}
      img={people.thumbnail}
      name={people.name}
      part={people.part}
      links={links}
      introduce={people.introduce}
      review={people.review}
    />
  );
});

const People = () => {
  const { isMobile } = useDeviceType();

  return (
    <Layout>
      <ContentWithTitle title="사이퍼 소개">
        <Wrapper isMobile={isMobile}>
          <InfiniteScroll items={peopleCards} className="contents" />
        </Wrapper>
      </ContentWithTitle>
    </Layout>
  );
};

export default People;
