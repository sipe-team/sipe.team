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
        <Flex asChild={true} align="center" justify="center">
          <Typography
            className={styles.highlightTitle}
            color={color.cyan400}
            weight="semiBold"
          >
            {processDate}
          </Typography>
        </Flex>
        <Typography
          color={color.gray400}
          className={styles.subTitle}
          weight="medium"
        >
          {subTitle}
        </Typography>
      </CardWrapper>
    </Flex>
  );
}

export default ScheduleCard;
