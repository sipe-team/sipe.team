import { ComponentProps } from 'react';

import { ReactComponent as OrganizerMark } from '@/assets/organizer.svg';
import Box from '@/components/common/Box';
import { Image } from '@/components/SectionA/ImageCard/styled';

import Link from '../Link';
import * as S from './styled';

type PeopleCardProps = ComponentProps<'div'> & {
  img?: string;
  name: string;
  links?: { type: 'GITHUB' | 'LINKEDIN' | 'LINK'; url: string }[];
  part: string;
  isOrganizer?: boolean;
};

const PeopleCard = ({
  img,
  name,
  links = [],
  part,
  isOrganizer = false,
}: PeopleCardProps) => {
  return (
    <Box type="CONTENT" className="people-box">
      <S.Meta>
        <Image className="profile" alt="user image" src={img} />
        <section className="main-info">
          <h3 className="name">{name}</h3>
          <article className="links">
            {links.map((link) => (
              <Link type={link.type} url={link.url} key={link.type} />
            ))}
          </article>
        </section>
        <section className="sub-info">
          <p className="part">{part}</p>
          {isOrganizer && (
            <p>
              Organizer <OrganizerMark />
            </p>
          )}
        </section>
      </S.Meta>
      <S.Introduce>introduce area</S.Introduce>
      <S.Review>review area</S.Review>
    </Box>
  );
};

export default PeopleCard;
