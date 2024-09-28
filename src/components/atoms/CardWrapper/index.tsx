import { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

type CardWrapperProps = ComponentProps<'div'> & {
  type?: 'BASIC' | 'CONTENT';
  minHeight?: number;
  className?: string;
};

function CardWrapper({
  type = 'BASIC',
  minHeight,
  children,
  className,
  ...props
}: CardWrapperProps) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        { [styles.basicType]: type === 'BASIC' },
        className,
      )}
      style={{ minHeight: `${minHeight}px` }}
      {...props}
    >
      {children}
    </div>
  );
}

export default CardWrapper;
