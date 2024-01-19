import Layout from '@/components/Layout';
import Card from '../../../../components/About/Card';
import { introduces } from '../../data';
import ContentWithTitle from '@/components/ContentWithTitle';

const Introduce = () => {
  return (
    <Layout>
      <ContentWithTitle title="샤이프 소개">
        {introduces.map((card) => (
          <Card key={card.index} {...card} />
        ))}
      </ContentWithTitle>
    </Layout>
  );
};

export default Introduce;
