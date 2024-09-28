import ExternalLink from '@/components/atoms/ExternalLink';
import Image from '@/components/molecules/Image';
import { UserIcon } from '@/libs/assets/icons';

import styles from './index.module.scss';

type ActiveCardProps = React.ComponentProps<'div'> & {
  thumbnail?: string;
  profile?: string;
  contentTitle: string;
  contentBody: string;
  userName: string;
  link: string;
  createDate: string;
};

function ActiveCard({
  thumbnail,
  profile,
  contentTitle,
  contentBody,
  userName,
  createDate,
  link,
}: ActiveCardProps) {
  return (
    <ExternalLink
      href={link}
      withTextUnderline={false}
      className={styles.activeCardWrapper}
    >
      <Image
        className={styles.thumbnail}
        src={thumbnail}
        fill
        height={220}
        objectFit="cover"
        alt="thumbnail"
        sizes="(max-width: 1060px) 50vw, 33vw"
      />
      <article className={styles.contentsWrapper}>
        <section className={styles.contents}>
          <div className={styles.title}>{contentTitle}</div>
          <p className={styles.body}>{contentBody}</p>
        </section>
        <section className={styles.posterUserInfo}>
          <div className={styles.userWrapper}>
            {profile ? (
              <Image
                src={profile}
                alt="user profile"
                width={32}
                height={32}
                className={styles.userIcon}
              />
            ) : (
              <UserIcon className={styles.userIcon} />
            )}
            <label className={styles.userName}>{userName}</label>
          </div>
          <label className={styles.createDate}>{createDate}</label>
        </section>
      </article>
    </ExternalLink>
  );
}

export default ActiveCard;
