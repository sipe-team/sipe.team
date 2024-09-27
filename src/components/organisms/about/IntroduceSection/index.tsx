import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import Card from '@/components/molecules/Card';
import { introduces } from '@/libs/constants/about';

function Introduce() {
  return (
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
  );
}

export default Introduce;
