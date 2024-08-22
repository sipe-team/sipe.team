import styled from '@emotion/styled';

import Github from '@/assets/ico_github.svg';
import ETCLink from '@/assets/ico_link.svg';
import LinkedIn from '@/assets/ico_linkedin.svg';

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
    <LinkIcon onClick={handleClick}>
      {type === 'GITHUB' && <Github />}
      {type === 'LINKEDIN' && <LinkedIn />}
      {type === 'LINK' && <ETCLink />}
    </LinkIcon>
  );
};

const LinkIcon = styled.a`
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
