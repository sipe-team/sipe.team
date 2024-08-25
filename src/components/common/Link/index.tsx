import { LinkIcon } from '@/assets/icons';
import { GithubIconLogo, LinkedInIconLogo } from '@/assets/logos';

import styles from './index.module.scss';

type LinkProps = {
  type: 'GITHUB' | 'LINKEDIN' | 'LINK';
  url: string;
};

const Link = ({ type, url }: LinkProps) => {
  const handleClick = () => {
    if (!url.match(/^https?:\/\//i)) {
      url = 'https://' + url;
    }
    window.open(url);
  };

  return (
    <a className={styles.anchor} onClick={handleClick}>
      {type === 'GITHUB' && <GithubIconLogo />}
      {type === 'LINKEDIN' && <LinkedInIconLogo />}
      {type === 'LINK' && <LinkIcon />}
    </a>
  );
};

export default Link;
