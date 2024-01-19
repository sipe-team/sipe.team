import Layout from '@/components/Layout';
import { sponsors } from '../../data';
import * as S from './styled';
import ContentWithTitle from '@/components/ContentWithTitle';

const Sponsor = () => {
  return (
    <Layout>
      <ContentWithTitle title="후원사 소개">
        <S.ImageList>
          {sponsors.map((image) => (
            <S.Image src={image.src} />
          ))}
        </S.ImageList>
      </ContentWithTitle>
    </Layout>
  );
};

export default Sponsor;
