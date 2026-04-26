import { Flex } from '@sipe-team/side';
import clsx from 'clsx';

import Badge from '@/components/atoms/Badge';
import Image from '@/components/molecules/Image';

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
    <Flex
      align="flex-start"
      className={clsx(styles.section, reverse && styles.reverse)}
      direction="column"
      gap="24px"
      grow={1}
      justify="flex-start"
      shrink={1}
    >
      <Image
        fill
        priority
        className={styles.image}
        src={src}
        alt={title}
        height={270}
        objectFit="contain"
      />
      <Flex
        align="flex-start"
        className={styles.titleWrapper}
        direction="column"
        gap="24px"
        inline={true}
        justify="flex-start"
      >
        <Badge text={badgeText} />
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </Flex>
    </Flex>
  );
}

export default Card;
