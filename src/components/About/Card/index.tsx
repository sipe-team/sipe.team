import clsx from 'clsx';

import Badge from '@/components/common/Badge';
import Image from '@/components/Image';

import styles from './index.module.scss';

interface CardProps {
  src: string;
  badgeText: string;
  title: string;
  subTitle: string;
  reverse?: boolean;
}

function Card({ src, badgeText, title, subTitle, reverse }: CardProps) {
  return (
    <div className={clsx(styles.section, reverse && styles.reverse)}>
      <Image
        fill
        priority
        className={styles.image}
        src={src}
        alt={title}
        height={270}
        objectFit="contain"
      />
      <div className={styles.titleWrapper}>
        <Badge text={badgeText} />
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
    </div>
  );
}

export default Card;
