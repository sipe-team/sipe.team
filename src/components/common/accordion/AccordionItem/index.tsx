'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { AccordionArrowIcon } from '@/assets/icons';

import styles from './index.module.scss';

export type AccordionItemProps = {
  title: string;
  value: string;
  onClick?: () => void;
  isActive?: boolean;
};

function AccordionItem({
  title,
  value,
  onClick,
  isActive,
}: AccordionItemProps) {
  return (
    <div className={styles.wrapper}>
      <motion.button type="button" className={styles.title} onClick={onClick}>
        {title}
        <div className={clsx(styles.arrow, { [styles.isOpen]: isActive })}>
          <AccordionArrowIcon className={styles.arrowIcon} />
        </div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          >
            <div className={styles.value}>{value}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionItem;
