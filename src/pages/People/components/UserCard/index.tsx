import { ComponentProps } from 'react';

import { ReactComponent as OrganizerMark } from '@/assets/organizer.svg';
import CardWrapper from '@/components/CardWrapper';
import Image from '@/components/Image';

import Link from '../../../../components/Link';
import * as S from './styled';

type UserCardProps = ComponentProps<'div'> & {
  period: string;
  img?: string;
  name: string;
  links?: { type: 'GITHUB' | 'LINKEDIN' | 'LINK'; url: string }[];
  part: string;
  isOrganizer?: boolean;
  introduce?: string;
  review?: string;
};

const UserCard = ({
  period,
  img,
  name,
  links = [],
  part,
  isOrganizer = false,
  introduce = '',
  review = '',
}: UserCardProps) => {
  const isContributor = period === 'contribute';

  return (
    <CardWrapper
      type="CONTENT"
      className="people-box"
      minHeight={isContributor ? undefined : 270}
    >
      <S.Meta>
        <section className="profile-bg">
          <Image
            className="profile"
            alt="user image"
            src={img}
            style={{ objectFit: 'cover' }}
          />
        </section>
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
              <p className="organizer">
                Organizer <OrganizerMark className="organizer-mark" />
              </p>
            )}
          </section>
        </section>
      </S.Meta>
      <S.Introduce>{introduce}</S.Introduce>
      {!isContributor && (
        <S.Review>
          <h3>활동후기</h3>
          <p>{review}</p>
        </S.Review>
      )}
    </CardWrapper>
  );
};

export default UserCard;
