import ContentWithTitle from '@/components/ContentWithTitle';
import Image from '@/components/Image';
import { getAbout } from '@/db';
import { getEntries } from '@/libs/utils';

import styles from './index.module.scss';

function Sponsor() {
  const about = getAbout();
  const sponsors = getEntries(about.sponsor);

  return (
    <>
      <ContentWithTitle title="후원사 소개">
        <div className={styles.imageList}>
          {sponsors.map(([key, sponsor]) => (
            <Image
              objectFit="contain"
              src={sponsor.link}
              key={key}
              alt={sponsor.name}
              width={320}
              height={180}
            />
          ))}
        </div>
      </ContentWithTitle>
    </>
  );
}

export default Sponsor;
