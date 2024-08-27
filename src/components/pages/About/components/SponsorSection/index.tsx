import ContentWithTitle from '@/components/ContentWithTitle';
import Image from '@/components/Image';
import Layout from '@/components/Layout';
import * as db from '@/db/index.json';

import styles from './index.module.scss';

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
  return (
    <Layout>
      <ContentWithTitle title="후원사 소개">
        <div className={styles.imageList}>
          {sponsors?.map((image) => (
            <Image
              objectFit="contain"
              src={image.src}
              key={image.key}
              alt={image.name}
              width={320}
              height={180}
            />
          ))}
        </div>
      </ContentWithTitle>
    </Layout>
  );
};

export default Sponsor;
