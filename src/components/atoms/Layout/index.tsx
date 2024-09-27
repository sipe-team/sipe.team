import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './index.module.scss';

function Layout({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.layout, className)}>{children}</div>
    </div>
  );
}

export default Layout;
