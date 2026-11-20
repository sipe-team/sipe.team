import ContentWithTitle from '@/components/atoms/ContentWithTitle';
import ExternalLink from '@/components/atoms/ExternalLink';
import { getAbout } from '@/db';
import { getEntries } from '@/libs/utils';

import SponsorImage from './SponsorImage';

import styles from './index.module.scss';

const sponsorWebsites: Record<string, string> = {
  openub: 'https://www.openub.com/',
  elicelab: 'https://lab.elice.io/',
  inflearn: 'https://www.inflearn.com/',
  dcamp: 'https://dcamp.kr/',
  jpub: 'https://jpub.tistory.com/',
  ictcoc: 'https://ictcoc.kr/',
  hanbit: 'https://www.hanbit.co.kr/',
  creverse: 'https://company.creverse.com/',
  cloop: 'https://www.cloop.kr/',
};

function withSponsorUtm(href: string) {
  const url = new URL(href);
  url.searchParams.set('utm_source', 'sipe');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', 'sponsor');
  return url.toString();
}

function Sponsor() {
  const about = getAbout();
  const sponsors = getEntries(about.sponsor);

  return (
    <>
      <ContentWithTitle id="sponsors" title="후원사 소개">
        <div className={styles.imageList}>
          {sponsors.map(([key, sponsor]) => {
            const href = sponsorWebsites[sponsor.name.trim().toLowerCase()];
            const logo = <SponsorImage src={sponsor.link} alt={sponsor.name} />;

            return href ? (
              <ExternalLink
                key={key}
                href={withSponsorUtm(href)}
                withTextUnderline={false}
                aria-label={`${sponsor.name} 공식 사이트 (새 탭에서 열기)`}
                className={styles.sponsorLink}
              >
                {logo}
              </ExternalLink>
            ) : (
              <SponsorImage key={key} src={sponsor.link} alt={sponsor.name} />
            );
          })}
          <ExternalLink
            href={withSponsorUtm('https://alpaon.com/ko/services')}
            withTextUnderline={false}
            aria-label="알파온 서비스 페이지 (새 탭에서 열기)"
            className={`${styles.sponsorLink} ${styles.alpaonLink}`}
          >
            <SponsorImage
              src="/assets/sponsors/alpaon-flat.png"
              alt="Alpaon 알파온"
            />
          </ExternalLink>
        </div>
      </ContentWithTitle>
    </>
  );
}

export default Sponsor;
