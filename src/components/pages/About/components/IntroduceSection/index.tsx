import Card from '@/components/About/Card';
import ContentWithTitle from '@/components/ContentWithTitle';
import Layout from '@/components/Layout';
import { introduces } from '@/components/pages/About/data';

const Introduce = () => {
  return (
    <Layout>
      <ContentWithTitle title="사이프 소개">
        {introduces.map(({ id, badgeText, src, subTitle, title }) => (
          <Card
            key={id}
            reverse={id % 2 === 0}
            badgeText={badgeText}
            src={src}
            subTitle={subTitle}
            title={title}
          />
        ))}
      </ContentWithTitle>
    </Layout>
  );
};

export default Introduce;
