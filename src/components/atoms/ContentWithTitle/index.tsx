import { color, Flex, Typography } from '@sipe-team/side';
import clsx from 'clsx';

import styles from './index.module.scss';

type ContentWithTitleProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  titleColor?: string;
  titleSize?: 36 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 48;
};

function ContentWithTitle({
  title,
  children,
  className,
  style,
  titleColor,
  titleSize = 36,
}: ContentWithTitleProps) {
  return (
    <Flex
      align="center"
      className={clsx(styles.wrapper, className)}
      direction="column"
      style={style}
    >
      <Typography
        color={titleColor || color.white}
        className={styles.title}
        size={titleSize}
      >
        {title}
      </Typography>
      {children}
    </Flex>
  );
}

export default ContentWithTitle;
