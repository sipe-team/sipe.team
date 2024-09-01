import Card from '@/components/About/Card';
import ContentWithTitle from '@/components/ContentWithTitle';
import { introduces } from '@/constants/about';

const Introduce = () => {
  return (
    <>
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
    </>
  );
};

export default Introduce;
