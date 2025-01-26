import { color, Typography } from '@sipe-team/side';

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
          <Typography
            color={color.white}
            className={styles.title}
            size={20}
            weight="bold"
          >
            {contentTitle}
          </Typography>
          <Typography className={styles.body} size={14}>
            {contentBody}
          </Typography>
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
            <Typography color={color.white} size={14}>
              {userName}
            </Typography>
          </div>
          <Typography className={styles.createDate} size={12} weight="semiBold">
            {createDate}
          </Typography>
        </section>
      </article>
    </ExternalLink>
  );
}

export default ActiveCard;
