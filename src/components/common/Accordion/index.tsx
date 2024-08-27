'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { AccordionArrowIcon } from '@/assets/icons';

import styles from './index.module.scss';

export type AccordionProps = {
  question: string;
  answer: string;
};

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <motion.button
        type="button"
        className={styles.question}
        onClick={() => setIsOpen((v) => !v)}
      >
        {question}
        <div className={clsx(styles.arrow, { [styles.isOpen]: isOpen })}>
          <AccordionArrowIcon
            className={styles.arrowIcon}
            width={36}
            height={36}
          />
        </div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          >
            <div className={styles.answer}>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
