import clsx from 'clsx';
import { FunctionComponent, SVGAttributes } from 'react';

import ExternalLink from '@/components/atoms/ExternalLink';
import { EmailIcon, LinkIcon } from '@/libs/assets/icons';
import {
  GithubLogo,
  InstagramLogo,
  KakaoLogo,
  LinkedInLogo,
  YoutubeLogo,
} from '@/libs/assets/logos';

import styles from './index.module.scss';

export type LogoType =
  | 'GITHUB'
  | 'LINKEDIN'
  | 'LINK'
  | 'INSTAGRAM'
  | 'YOUTUBE'
  | 'EMAIL';

type Props = {
  type: LogoType;
  url?: string;
  className?: string;
  size?: 'small' | 'middle';
  theme?: 'light' | 'dark';
};

function SocialIconLink({
  url,
  type,
  className,
  size = 'middle',
  theme = 'light',
}: Props) {
  const IconLogo = {
    GITHUB: GithubLogo,
    LINKEDIN: LinkedInLogo,
    INSTAGRAM: InstagramLogo,
    YOUTUBE: YoutubeLogo,
    LINK: LinkIcon,
    EMAIL: EmailIcon,
    KAKAO: KakaoLogo,
  } as Partial<Record<LogoType, FunctionComponent<SVGAttributes<SVGElement>>>>;

  const Logo = IconLogo[type] || LinkIcon;

  const logoClassName = clsx(styles.socialIcon, styles[size], styles[theme]);

  const replaceUrl = (targetUrl: string) => {
    if (!targetUrl.match(/^https?:\/\//i)) {
      return 'https://' + targetUrl;
    }

    return targetUrl;
  };

  if (!url) {
    return <Logo className={logoClassName} aria-label={type} />;
  }

  return (
    <ExternalLink href={replaceUrl(url)} className={className}>
      <Logo className={logoClassName} aria-label={type} />
    </ExternalLink>
  );
}

export default SocialIconLink;
