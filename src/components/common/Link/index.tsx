import styled from '@emotion/styled';

import { LinkIcon } from '@/assets/icons';
import { GithubIconLogo, LinkedInIconLogo } from '@/assets/logos';

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
    <Anchor onClick={handleClick}>
      {type === 'GITHUB' && <GithubIconLogo />}
      {type === 'LINKEDIN' && <LinkedInIconLogo />}
      {type === 'LINK' && <LinkIcon />}
    </Anchor>
  );
};

const Anchor = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg path {
    transition: opacity 0.3s ease;
  }

  &:hover {
    svg path {
      opacity: 0.6;
    }
  }
`;

export default Link;
