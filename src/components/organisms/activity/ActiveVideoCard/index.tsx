import React from 'react';

import { color, Typography } from '@sipe-team/side';
import clsx from 'clsx';

import ExternalLink from '@/components/atoms/ExternalLink';
import Image from '@/components/molecules/Image';

import styles from './index.module.scss';

type ActiveVideoCardProps = React.ComponentProps<'div'> & {
  thumbnail: string;
  contentTitle: string;
  userName: string;
  link: string;
  createDate: string;
};

function ActiveVideoCard({
  thumbnail,
  contentTitle,
  userName,
  createDate,
  link,
  className,
}: ActiveVideoCardProps) {
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
          <Typography className={styles.title} color={color.white} size={16}>
            {contentTitle}
          </Typography>
          <div className={styles.body}>
            <Typography
              className={styles.username}
              color={color.white}
              size={14}
            >
              {userName}
            </Typography>
            <Typography className={styles.date} color={color.white} size={14}>
              {createDate}
            </Typography>
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
}

export default ActiveVideoCard;
