import clsx from 'clsx';
import { FunctionComponent, SVGAttributes } from 'react';

import { LinkIcon } from '@/assets/icons';
import { GithubIconLogo, LinkedInIconLogo } from '@/assets/logos';
import ExternalLink from '@/components/common/ExternalLink';

import styles from './index.module.scss';

export type LogoType = 'GITHUB' | 'LINKEDIN' | 'LINK';

type Props = {
  type: 'GITHUB' | 'LINKEDIN' | 'LINK';
  url?: string;
  className?: string;
};

function SocialIconLink({ url, type, className }: Props) {
  const IconLogo = {
    GITHUB: GithubIconLogo,
    LINKEDIN: LinkedInIconLogo,
    LINK: LinkIcon,
  } as Partial<Record<LogoType, FunctionComponent<SVGAttributes<SVGElement>>>>;

  const Logo = IconLogo[type] || LinkIcon;

  const logoClassName = clsx(styles.socialIcon);

  const replaceUrl = (targetUrl: string) => {
    if (!targetUrl.match(/^https?:\/\//i)) {
      return 'https://' + targetUrl;
    }
    return targetUrl;
  };

  if (!url) {
    return <Logo className={logoClassName} />;
  }

  return (
    <ExternalLink href={replaceUrl(url)} className={className}>
      <Logo className={logoClassName} />
    </ExternalLink>
  );
}

export default SocialIconLink;
