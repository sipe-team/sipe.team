import CardWrapper from '@/components/CardWrapper';

import styles from './index.module.scss';

type CarouselCardProps = {
  title: string;
  value: string;
};

function CarouselCard({ title, value }: CarouselCardProps) {
  return (
    <CardWrapper className={styles.wrapper}>
      <div>{title}</div>
      <div>{value}</div>
    </CardWrapper>
  );
}

export default CarouselCard;
