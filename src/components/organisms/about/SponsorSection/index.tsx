import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import ExternalLink from '@/components/atoms/ExternalLink';
import { getAbout } from '@/db';
import { getEntries } from '@/libs/utils';

import SponsorImage from './SponsorImage';

import styles from './index.module.scss';

function Sponsor() {
  const about = getAbout();
  const sponsors = getEntries(about.sponsor);

  return (
    <>
      <ContentWithTitle id="sponsors" title="후원사 소개">
        <div className={styles.imageList}>
          {sponsors.map(([key, sponsor]) => (
            <SponsorImage key={key} src={sponsor.link} alt={sponsor.name} />
          ))}
          <ExternalLink
            href="https://alpaon.com/ko/services"
            withTextUnderline={false}
            aria-label="알파온 서비스 페이지 (새 탭에서 열기)"
            className={styles.sponsorLink}
          >
            <SponsorImage
              src="/assets/sponsors/alpaon.png"
              alt="Alpaon 알파온"
            />
          </ExternalLink>
        </div>
      </ContentWithTitle>
    </>
  );
}

export default Sponsor;
