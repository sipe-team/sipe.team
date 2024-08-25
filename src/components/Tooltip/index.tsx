import React from 'react';

import styles from './index.module.scss';
import * as S from './styled';

export type TooltipProps = {
  children: React.ReactNode;
  title: string;
};

const Tooltip = ({ children, title }: TooltipProps) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <S.TooltipContainer className="tooltip-container">
        {title}
      </S.TooltipContainer>
    </div>
  );
};

export default Tooltip;
