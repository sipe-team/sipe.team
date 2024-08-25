import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

type CardWrapperProps = React.ComponentProps<'div'> & {
  type?: 'BASIC' | 'CONTENT';
  minHeight?: number;
};

const CardWrapper = ({
  type = 'BASIC',
  minHeight,
  children,
  ...props
}: CardWrapperProps) => {
  return (
    <div
      className={clsx(styles.wrapper, { [styles.basicType]: type === 'BASIC' })}
      style={{ minHeight: `${minHeight}px` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
