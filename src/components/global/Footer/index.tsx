import { color, Typography } from '@sipe-team/side';

import Layout from '@/components/atoms/Layout';
import SocialIconLink from '@/components/molecules/SocialIconLink';

import styles from './index.module.scss';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Layout>
        <div className={styles.group}>
          <Typography color={color.white} size={12} weight="medium">
            All rights reserved ⓒ SIPE
          </Typography>
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
    </footer>
  );
}

export default Footer;
