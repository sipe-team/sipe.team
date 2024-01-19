import Layout from '@/components/Layout';
import { sponsors } from '../../data';
import * as S from './styled';
import ContentWithTitle from '@/components/ContentWithTitle';
import useDeviceType from '@/hook/useDeviceType';

const Sponsor = () => {
  const { isMobile, isTablet } = useDeviceType();
  return (
    <Layout>
      <ContentWithTitle title="후원사 소개">
        <S.ImageList isMobile={isMobile} isTablet={isTablet}>
          {sponsors.map((image) => (
            <S.Image src={image.src} />
          ))}
        </S.ImageList>
      </ContentWithTitle>
    </Layout>
  );
};

export default Sponsor;
