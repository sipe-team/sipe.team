'use client';

import React, {
  Children,
  cloneElement,
  CSSProperties,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

import { AccordionItemProps } from '../AccordionItem';

export type AccordionProps = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

function Accordion({ className, children, style }: AccordionProps) {
  const [currentActive, setCurrentActive] = useState<string | null>(null);

  const handleClick = (isActive: boolean, activeKey: string | null) => {
    if (isActive) {
      setCurrentActive(null);
      return;
    }

    setCurrentActive(activeKey);
  };

  return (
    <div className={className} style={style}>
      {Children.toArray(children).map((child) => {
        const accordionItem = child as ReactElement<AccordionItemProps>;
        const isActive = currentActive === accordionItem.key;

        return cloneElement(accordionItem, {
          ...accordionItem.props,
          isActive,
          onClick: () => {
            handleClick(isActive, accordionItem.key);
            accordionItem.props.onClick?.();
          },
        });
      })}
    </div>
  );
}

export default Accordion;
