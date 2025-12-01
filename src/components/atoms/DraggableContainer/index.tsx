'use client';

import { ComponentProps } from 'react';

import clsx from 'clsx';

import useDraggableScroll from '@/hook/useDraggableScroll';

import styles from './index.module.scss';

type DraggableContainerProps = ComponentProps<'div'> & {
  className?: string;
  ariaLabel?: string;
};

function DraggableContainer({
  children,
  className,
  ariaLabel,
  ...props
}: DraggableContainerProps) {
  const {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useDraggableScroll();

  return (
    <div
      ref={ref}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      className={clsx(styles.container, className)}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      {children}
    </div>
  );
}

export default DraggableContainer;
