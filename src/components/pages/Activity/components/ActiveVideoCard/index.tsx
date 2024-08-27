import clsx from 'clsx';
import React from 'react';

import Image from '@/components/Image';

import styles from './index.module.scss';

type ActiveVideoCardProps = React.ComponentProps<'div'> & {
  thumbnail: string;
  contentTitle: string;
  userName: string;
  link: string;
  createDate: string;
};

export const ActiveVideoCard = ({
  thumbnail,
  contentTitle,
  userName,
  createDate,
  link,
  className,
}: ActiveVideoCardProps) => {
  const handleClick = () => {
    if (!link.match(/^https?:\/\//i)) {
      link = 'https://' + link;
    }
    window.open(link);
  };

  return (
    <article className={clsx(styles.wrapper, className)}>
      <Image
        style={{ borderRadius: '12px' }}
        objectFit="cover"
        fill
        className={styles.thumbnail}
        alt={contentTitle}
        src={thumbnail}
      />
      <section className={styles.contentsWrapper}>
        <section className={styles.contentsInfo}>
          <div className={styles.title}>{contentTitle}</div>
          <div className={styles.body}>
            <span className={styles.username}>{userName}</span>
            <span className={styles.date}>{createDate}</span>
          </div>
        </section>
        <button className={styles.linkButton} onClick={handleClick}>
          보러가기
        </button>
      </section>
    </article>
  );
};
