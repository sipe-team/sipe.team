import clsx from 'clsx';

import styles from './index.module.scss';

type Props = {
  onClick: () => void;
  isOpened?: boolean;
};

function HamburgerButton({ onClick, isOpened = false }: Props) {
  return (
    <button
      type="button"
      className={clsx(styles.wrapper, { [styles.open]: isOpened })}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

export default HamburgerButton;
