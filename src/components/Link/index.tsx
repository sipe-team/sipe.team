import styled from '@emotion/styled';

import { ReactComponent as Github } from '@/assets/ico_github.svg';
import { ReactComponent as ETCLink } from '@/assets/ico_link.svg';
import { ReactComponent as LinkedIn } from '@/assets/ico_linkedin.svg';

type LinkProps = {
  type: 'GITHUB' | 'LINKEDIN' | 'LINK';
  url: string;
};

const Link = ({ type, url }: LinkProps) => {
  const handleClick = () => {
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
    transition: fill 0.3s ease;
  }

  &:hover {
    svg path {
      fill: ${({ theme }) => theme.colors.gray4};
    }
  }
`;

export default Link;
