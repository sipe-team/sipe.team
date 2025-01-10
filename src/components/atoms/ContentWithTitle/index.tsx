import { color, Typography } from '@sipe-team/side';

import styles from './index.module.scss';

type ContentWithTitleProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
};

function ContentWithTitle({ title, children }: ContentWithTitleProps) {
  return (
    <div className={styles.wrapper}>
      <Typography color={color.white} className={styles.title} size={36}>
        {title}
      </Typography>
      {children}
    </div>
  );
}

export default ContentWithTitle;
