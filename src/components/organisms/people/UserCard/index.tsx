import { ComponentProps } from 'react';

import { Flex } from '@sipe-team/side';

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
  period: _period,
  img,
  name,
  links,
  part,
  isOrganizer = false,
  introduce = '',
  review = '',
}: UserCardProps) {
  return (
    <CardWrapper type="CONTENT" className="people-box" minHeight={270}>
      <Flex asChild className={styles.userInfo}>
        <section>
          <Image
            className={styles.profile}
            alt="user image"
            src={img}
            width={70}
            height={70}
          />
          <Flex asChild className={styles.info} direction="column">
            <section>
              <Flex asChild className={styles.mainInfo} justify="space-between">
                <section>
                  <h3 className={styles.name}>{name}</h3>
                  <Flex asChild gap="12px">
                    <article>
                      {links?.map(([type, link]) => (
                        <SocialIconLink
                          type={type}
                          url={link}
                          key={type}
                          size="small"
                        />
                      ))}
                    </article>
                  </Flex>
                </section>
              </Flex>
              <Flex asChild className={styles.subInfo} justify="space-between">
                <section>
                  <p className={styles.part}>{part}</p>
                  {isOrganizer && (
                    <Flex
                      align="center"
                      asChild
                      className={styles.organizer}
                      justify="center"
                    >
                      <p>
                        Organizer{' '}
                        <OrganizerIcon
                          className={styles.organizerMark}
                          style={{ color: 'var(--primary)' }}
                        />
                      </p>
                    </Flex>
                  )}
                </section>
              </Flex>
            </section>
          </Flex>
        </section>
      </Flex>
      <section className={styles.introduceWrapper}>{introduce}</section>
      {review && (
        <section className={styles.reviewWrapper}>
          <h3>활동후기</h3>
          <p>{review}</p>
        </section>
      )}
    </CardWrapper>
  );
}

export default UserCard;
