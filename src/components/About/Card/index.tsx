import clsx from 'clsx';

import Badge from '@/components/common/Badge';
import useDeviceType from '@/hook/useDeviceType';

import styles from './index.module.scss';

interface CardProps {
  src: string;
  index: number;
  badgeText: string;
  title: string;
  subTitle: string;
}

const Card = ({ src, index, badgeText, title, subTitle }: CardProps) => {
  const { isTablet } = useDeviceType();
  const isOdd = index % 2 !== 0;
  return (
    <div className={clsx(styles.section, { [styles.index3]: index === 3 })}>
      {isOdd || (!isOdd && isTablet) ? (
        <img className={styles.image} src={src} />
      ) : null}
      <div className={styles.titleWrapper}>
        <Badge text={badgeText} />
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
      {!isOdd && !isTablet ? <img className={styles.image} src={src} /> : null}
    </div>
  );
};

export default Card;
