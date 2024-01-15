import { ComponentProps } from 'react';

import { ReactComponent as OrganizerMark } from '@/assets/organizer.svg';
import Box from '@/components/common/Box';
import Image from '@/components/common/Image'

import Link from '../Link';
import * as S from './styled';

type PeopleCardProps = ComponentProps<'div'> & {
  img?: string;
  name: string;
  links?: { type: 'GITHUB' | 'LINKEDIN' | 'LINK'; url: string }[];
  part: string;
  isOrganizer?: boolean;
  introduce?: string;
  review?: string;
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
        <section className="info">
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
        </section>
      </S.Meta>
      <S.Introduce>
        자기소개는 24자 이내, 1줄까지 자기소개는 24자 이내, 1줄까지
      </S.Introduce>
      <S.Review>
        <h3>활동후기</h3>
        <p>
          활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자,
          3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동
          후기는 80자, 3줄까지 활동 후기는 80자, 3줄까지 활동 후기는 80자,
          3줄까지 활동 후기는 80자, 3줄까지
        </p>
      </S.Review>
    </Box>
  );
};

export default PeopleCard;
