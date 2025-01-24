import { ReactNode } from 'react';

import { Flex } from '@sipe-team/side';
import clsx from 'clsx';

import styles from './index.module.scss';

function Layout({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Flex
      align="center"
      className={styles.wrapper}
      direction="row"
      justify="center"
    >
      <div className={clsx(styles.layout, className)}>{children}</div>
    </Flex>
  );
}

export default Layout;
