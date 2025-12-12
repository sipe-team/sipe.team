import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import { getAbout } from '@/db';
import { getEntries } from '@/libs/utils';

import SponsorImage from './SponsorImage';

import styles from './index.module.scss';

function Sponsor() {
  const about = getAbout();
  const sponsors = getEntries(about.sponsor);

  return (
    <>
      <ContentWithTitle title="후원사 소개">
        <div className={styles.imageList}>
          {sponsors.map(([key, sponsor]) => (
            <SponsorImage key={key} src={sponsor.link} alt={sponsor.name} />
          ))}
        </div>
      </ContentWithTitle>
    </>
  );
}

export default Sponsor;
