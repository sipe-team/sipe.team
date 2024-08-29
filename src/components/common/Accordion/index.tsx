'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { AccordionArrowIcon } from '@/assets/icons';

import styles from './index.module.scss';

type AccordionProps = {
  question: string;
  answer: string;
};

function Accordion({ question, answer }: AccordionProps) {
  const [open, toggle] = useState(false);

  return (
    <div className={styles.wrapper}>
      <motion.button
        type="button"
        className={styles.question}
        onClick={() => toggle(!open)}
      >
        {question}
        <div className={clsx(styles.arrow, { [styles.isOpen]: open })}>
          <AccordionArrowIcon className={styles.arrowIcon} />
        </div>
      </motion.button>
      <AnimatePresence initial={false}>
        {open && (
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

export default Accordion;
