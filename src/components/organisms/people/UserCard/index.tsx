import { ComponentProps } from 'react';

import CardWrapper from '@/components/atoms/CardWrapper';
import Image from '@/components/molecules/Image';
import SocialIconLink, {
  type LogoType,
} from '@/components/molecules/SocialIconLink';
import { OrganizerIcon } from '@/libs/assets/icons';
import type { Entries, RequiredNonNullableObject } from '@/libs/utils';

import styles from './index.module.scss';

type UserCardProps = ComponentProps<'div'> & {
  period: string;
  img?: string;
  name: string;
  links?: Entries<
    RequiredNonNullableObject<Record<LogoType, string | undefined>>
  >;
  part: string;
  isOrganizer?: boolean;
  introduce?: string;
  review?: string;
};

function UserCard({
  period,
  img,
  name,
  links,
  part,
  isOrganizer = false,
  introduce = '',
  review = '',
}: UserCardProps) {
  const isContributor = period === 'contribute';

  return (
    <CardWrapper
      type="CONTENT"
      className="people-box"
      minHeight={isContributor ? undefined : 270}
    >
      <section className={styles.userInfo}>
        <Image
          className={styles.profile}
          alt="user image"
          objectFit="cover"
          src={img}
          width={70}
          height={70}
          sizes="(max-width: 1060px) 50vw, 33vw"
        />
        <section className={styles.info}>
          <section className={styles.mainInfo}>
            <h3 className={styles.name}>{name}</h3>
            <article className={styles.links}>
              {links?.map(([type, link]) => (
                <SocialIconLink
                  type={type}
                  url={link}
                  key={type}
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
}

export default UserCard;
