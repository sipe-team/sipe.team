import { color, Flex, Typography } from '@sipe-team/side';

import CardWrapper from '@/components/atoms/CardWrapper';

import styles from './index.module.scss';

type ScheduleCardProps = {
  title: string;
  processDate: string;
  subTitle: string;
};

function ScheduleCard({ title, processDate, subTitle }: ScheduleCardProps) {
  return (
    <Flex
      align="center"
      asChild={true}
      direction="column"
      gap="16px"
      inline={true}
      justify="center"
    >
      <CardWrapper className={styles.wrapper}>
        <Typography
          className={styles.title}
          color={color.white}
          size={20}
          weight="bold"
        >
          {title}
        </Typography>
        <Flex
          asChild={true}
          align="center"
          className={styles.highlightTitle}
          justify="center"
        >
          <Typography color={'var(--primary)'} weight="semiBold">
            {processDate}
          </Typography>
        </Flex>
        <Typography
          className={styles.subTitle}
          color={color.gray200}
          weight="medium"
        >
          {subTitle}
        </Typography>
      </CardWrapper>
    </Flex>
  );
}

export default ScheduleCard;
