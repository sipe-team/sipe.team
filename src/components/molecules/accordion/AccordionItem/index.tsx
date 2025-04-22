'use client';

import { color, Flex, Typography } from '@sipe-team/side';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { AccordionArrowIcon } from '@/libs/assets/icons';

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
    <Flex className={styles.wrapper} direction="column" gap={0}>
      <Flex
        align="center"
        asChild={true}
        direction="row"
        justify="space-between"
      >
        <Typography asChild={true} color={color.white} weight="bold">
          <motion.button
            type="button"
            className={styles.title}
            onClick={onClick}
          >
            {title}
            <div className={clsx(styles.arrow, { [styles.isOpen]: isActive })}>
              <AccordionArrowIcon className={styles.arrowIcon} />
            </div>
          </motion.button>
        </Typography>
      </Flex>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          >
            <Typography
              color={color.gray200}
              className={styles.value}
              size={14}
              weight="semiBold"
            >
              {value}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
}

export default AccordionItem;
