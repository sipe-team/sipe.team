import React from 'react';
import { useRef } from 'react';

import { useInfiniteScroll } from '@/components/InfiniteScroll/hooks/useInfiniteScroll';

import * as S from './styled';

type InfiniteScrollProps = React.ComponentProps<'div'> & {
  items: React.ReactNode[];
};

const InfiniteScroll = ({
  items,
  children,
  className,
}: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { elements, isEnd } = useInfiniteScroll(containerRef, items);

  return (
    <S.Wrapper className={className}>
      {elements.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
      {!isEnd && (
        <div
          style={{ width: '100%', height: '10px' }}
          className="flag"
          ref={containerRef}
        ></div>
      )}
    </S.Wrapper>
  );
};

export default InfiniteScroll;