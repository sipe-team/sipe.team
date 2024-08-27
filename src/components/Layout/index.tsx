import React from 'react';

import styles from './index.module.scss';

const Layout = ({
  children,
  backgroundImage,
}: {
  children: React.ReactNode;
  backgroundImage?: string;
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className={styles.layout}>{children}</div>
    </div>
  );
};

export default Layout;
