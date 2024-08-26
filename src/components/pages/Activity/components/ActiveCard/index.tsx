import { UserIcon } from '@/assets/icons';
import CardWrapper from '@/components/CardWrapper';
import Image from '@/components/Image';
import useDeviceType from '@/hook/useDeviceType';

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

export const ActiveCard = ({
  thumbnail,
  profile,
  contentTitle,
  contentBody,
  userName,
  createDate,
  link,
  className,
}: ActiveCardProps) => {
  const handleClick = () => {
    if (!link.match(/^https?:\/\//i)) {
      link = 'https://' + link;
    }
    window.open(link);
  };

  const { isMobile } = useDeviceType();

  return (
    <CardWrapper
      type="CONTENT"
      minHeight={isMobile ? 333 : 252}
      onClick={handleClick}
      className={className}
    >
      <section className={styles.wrapper}>
        <Image className={styles.thumbnail} src={thumbnail} />
        <article className={styles.contentsWrapper}>
          <section className={styles.contents}>
            <div className={styles.title}>{contentTitle}</div>
            <p className={styles.body}>{contentBody}</p>
          </section>
          <section className={styles.posterUserInfo}>
            <div className={styles.userWrapper}>
              {profile ? (
                <img
                  src={profile}
                  alt="user profile"
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
      </section>
    </CardWrapper>
  );
};
