import React from 'react';
import { useRef } from 'react';

import { useInfiniteScroll } from '@/components/InfiniteScroll/hooks/useInfiniteScroll';

type InfiniteScrollProps = React.ComponentProps<'div'> & {
  items: Array<unknown>;
  components: (props: unknown) => React.ReactNode;
};

const InfiniteScroll = ({
  items,
  components,
  className,
}: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { elements, isEnd } = useInfiniteScroll(containerRef, items);

  return (
    <div className={className}>
      {elements.map((element, index) => (
        <React.Fragment key={index}>{components(element)}</React.Fragment>
      ))}
      {!isEnd && (
        <div
          style={{ width: '100%', height: '10px' }}
          className="flag"
          ref={containerRef}
        ></div>
      )}
    </div>
  );
};

export default InfiniteScroll;
