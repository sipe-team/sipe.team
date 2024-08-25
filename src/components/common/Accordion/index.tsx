import clsx from 'clsx';
import { useState } from 'react';

import { AccordionArrowIcon } from '@/assets/icons';

import styles from './index.module.scss';

export type AccordionProps = {
  q: string;
  a: string;
};

export default function Accordion({ q, a }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper} onClick={() => setIsOpen((v) => !v)}>
      <div className={styles.question}>
        {q}
        <div className={clsx(styles.arrow, { [styles.isOpen]: isOpen })}>
          <AccordionArrowIcon />
        </div>
      </div>
      {isOpen && <div className={styles.answer}>{a}</div>}
    </div>
  );
}
