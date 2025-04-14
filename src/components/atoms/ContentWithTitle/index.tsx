import { color, Flex, Typography } from '@sipe-team/side';

import styles from './index.module.scss';

type ContentWithTitleProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
};

function ContentWithTitle({ title, children }: ContentWithTitleProps) {
  return (
    <Flex align="center" className={styles.wrapper} direction="column">
      <Typography color={color.white} className={styles.title} size={36}>
        {title}
      </Typography>
      {children}
    </Flex>
  );
}

export default ContentWithTitle;
