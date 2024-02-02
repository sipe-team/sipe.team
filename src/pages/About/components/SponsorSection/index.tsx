import ContentWithTitle from '@/components/ContentWithTitle';
import Layout from '@/components/Layout';
import * as db from '@/db/index.json';
import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';

const sponsors = Object.keys(db.abouts.sponsor).map((key) => {
  const sponsor = db.abouts.sponsor;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { name, link } = sponsor[key];

  return {
    key: key,
    name,
    src: link,
  };
});

const Sponsor = () => {
  const { isMobile, isTablet } = useDeviceType();
  return (
    <Layout>
      <ContentWithTitle title="후원사 소개">
        <S.ImageList isMobile={isMobile} isTablet={isTablet}>
          {sponsors.map((image) => (
            <S.SponsorImage src={image.src} key={image.key} />
          ))}
        </S.ImageList>
      </ContentWithTitle>
    </Layout>
  );
};

export default Sponsor;
