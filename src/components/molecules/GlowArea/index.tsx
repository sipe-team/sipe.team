'use client';

import { PropsWithChildren } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import useElementSize from '@/hook/useElementSize';
import { createSVGMask } from '@/libs/utils/svg';

import styles from './index.module.scss';

interface GlowAreaProps {
  rx: number;
}

function GlowArea({ rx, children }: PropsWithChildren<GlowAreaProps>) {
  const [ref, { width, height }] = useElementSize();

  return (
    <AnimatePresence mode="wait">
      <div style={{ position: 'relative' }}>
        <motion.div
          className={styles.border}
          animate={{ '--border-angle': ['0turn', '1turn'] } as any}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: [0.5, 0, 0.5, 1],
          }}
          style={
            {
              '--size': `${width + 50}px`,
              '--area-width': `${width}px`,
              '--area-height': `${height}px`,
              '--svg-mask': `url(${createSVGMask(width + 1, height + 1, rx)})`,
            } as any
          }
        ></motion.div>
        <div className={styles.area} ref={ref}>
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default GlowArea;
