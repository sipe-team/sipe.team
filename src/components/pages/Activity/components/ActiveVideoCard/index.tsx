import clsx from 'clsx';
import React from 'react';

import ExternalLink from '@/components/common/ExternalLink';
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
  return (
    <article className={clsx(styles.wrapper, className)}>
      <Image
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
        <ExternalLink
          className={styles.linkButton}
          href={link}
          withTextUnderline={false}
        >
          보러가기
        </ExternalLink>
      </section>
    </article>
  );
};
