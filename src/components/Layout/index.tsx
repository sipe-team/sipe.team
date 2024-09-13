import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.layout, className)}>{children}</div>
    </div>
  );
}

export default Layout;
