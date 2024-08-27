import clsx from 'clsx';

import SocialIconLink from '@/components/common/SocialIconLink';

import Layout from '../Layout';
import styles from './index.module.scss';

type FooterProps = {
  fixed?: boolean;
};

export default function Footer({ fixed = false }: FooterProps) {
  return (
    <div className={clsx(styles.wrapper, { [styles.fixed]: fixed })}>
      <Layout>
        <div className={styles.group}>
          <div className={styles.copyright}>All rights reserved ⓒ SIPE</div>
          <div className={styles.logos}>
            <SocialIconLink
              type="INSTAGRAM"
              url="https://www.instagram.com/sipe_team"
            />
            <SocialIconLink type="GITHUB" url="https://github.com/sipe-team" />
            <SocialIconLink
              type="YOUTUBE"
              url="https://www.youtube.com/@sipe_team"
            />
            <SocialIconLink
              type="LINKEDIN"
              url="https://www.linkedin.com/company/sipe.team"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
