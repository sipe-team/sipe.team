import SocialIconLink from '@/components/common/SocialIconLink';

import Layout from '../Layout';
import styles from './index.module.scss';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <Layout>
        <div className={styles.group}>
          <div className={styles.copyright}>All rights reserved ⓒ SIPE</div>
          <div className={styles.logos}>
            <SocialIconLink
              type="INSTAGRAM"
              url="https://www.instagram.com/sipe_team"
              theme="light"
            />
            <SocialIconLink
              type="GITHUB"
              url="https://github.com/sipe-team"
              theme="light"
            />
            <SocialIconLink
              type="YOUTUBE"
              url="https://www.youtube.com/@sipe_team"
              theme="light"
            />
            <SocialIconLink
              type="LINKEDIN"
              url="https://www.linkedin.com/company/sipe.team"
              theme="light"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Footer;
