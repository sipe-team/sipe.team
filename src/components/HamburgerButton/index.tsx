import clsx from 'clsx';

import styles from './index.module.scss';

type Props = {
  onClick: () => void;
  isOpened?: boolean;
};

function HamburgerButton({ onClick, isOpened = false }: Props) {
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

export default HamburgerButton;
