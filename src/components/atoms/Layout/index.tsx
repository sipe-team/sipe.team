import { ReactNode } from 'react';

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
    <div className={styles.wrapper}>
      <div className={clsx(styles.layout, className)}>{children}</div>
    </div>
  );
}

export default Layout;
