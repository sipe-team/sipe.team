import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import SocialIconLink from '@/components/common/SocialIconLink';

import Layout from '../Layout';
import styles from './index.module.scss';

type FooterProps = {
  fixed?: boolean;
};

export default function Footer({ fixed = false }: FooterProps) {
  const pathname = usePathname();

  const color = pathname === '/' ? 'black' : 'gray';

  return (
    <div className={clsx(styles.wrapper, { [styles.fixed]: fixed })}>
      <Layout>
        <div className={styles.group}>
          <div className={clsx(styles.copyright, { [styles[color]]: color })}>
            All rights reserved ⓒ SIPE
          </div>
          <div className={styles.logos}>
            <SocialIconLink
              type="INSTAGRAM"
              url="https://www.instagram.com/sipe_team"
              theme="dark"
            />
            <SocialIconLink
              type="GITHUB"
              url="https://github.com/sipe-team"
              theme="dark"
            />
            <SocialIconLink
              type="YOUTUBE"
              url="https://www.youtube.com/@sipe_team"
              theme="dark"
            />
            <SocialIconLink
              type="LINKEDIN"
              url="https://www.linkedin.com/company/sipe.team"
              theme="dark"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
