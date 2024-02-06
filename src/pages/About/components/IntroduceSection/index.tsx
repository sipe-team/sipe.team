import ContentWithTitle from '@/components/ContentWithTitle';
import Layout from '@/components/Layout';

import Card from '../../../../components/About/Card';
import { introduces } from '../../data';

const Introduce = () => {
  return (
    <Layout>
      <ContentWithTitle title="사이프 소개">
        {introduces.map((card) => (
          <Card key={card.index} {...card} />
        ))}
      </ContentWithTitle>
    </Layout>
  );
};

export default Introduce;
