import clsx from 'clsx';

import styles from './index.module.scss';

export type HamburgerButtonProps = {
  onClick: () => void;
  isOpened?: boolean;
};

export default function HamburgerButton({
  onClick,
  isOpened = false,
}: HamburgerButtonProps) {
  return (
    <div
      className={clsx(styles.wrapper, { [styles.open]: isOpened })}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
