import { ComponentProps } from 'react';

import { OrganizerIcon } from '@/assets/icons';
import CardWrapper from '@/components/CardWrapper';
import SocialIconLink, {
  type LogoType,
} from '@/components/common/SocialIconLink';
import Image from '@/components/Image';

import styles from './index.module.scss';

type UserCardProps = ComponentProps<'div'> & {
  period: string;
  img?: string;
  name: string;
  links?: { type: LogoType; url: string }[];
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
      <section className={styles.Metawrapper}>
        <section className={styles.profileBg}>
          <Image className={styles.profile} alt="user image" src={img} />
        </section>
        <section className={styles.info}>
          <section className={styles.mainInfo}>
            <h3 className={styles.name}>{name}</h3>
            <article className={styles.links}>
              {links.map((link) => (
                <SocialIconLink
                  type={link.type}
                  url={link.url}
                  key={link.type}
                  size="small"
                />
              ))}
            </article>
          </section>
          <section className={styles.subInfo}>
            <p className={styles.part}>{part}</p>
            {isOrganizer && (
              <p className={styles.organizer}>
                Organizer <OrganizerIcon className={styles.organizerMark} />
              </p>
            )}
          </section>
        </section>
      </section>
      <section className={styles.introduceWrapper}>{introduce}</section>
      {!isContributor && (
        <section className={styles.reviewWrapper}>
          <h3>활동후기</h3>
          <p>{review}</p>
        </section>
      )}
    </CardWrapper>
  );
};

export default UserCard;
