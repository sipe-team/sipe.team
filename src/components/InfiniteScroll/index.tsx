import { Fragment, ReactNode, useRef } from 'react';

import { useInfiniteScroll } from '@/components/InfiniteScroll/hooks/useInfiniteScroll';

type InfiniteScrollProps<T> = {
  items: T[];
  components: (props: T) => ReactNode;
  className: string;
};

function InfiniteScroll<T = unknown>({
  items,
  components,
  className,
}: InfiniteScrollProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { elements, isEnd } = useInfiniteScroll<HTMLDivElement, T>(
    containerRef,
    items
  );

  return (
    <div className={className}>
      {elements.map((element, index) => (
        <Fragment key={index}>{components(element)}</Fragment>
      ))}
      {!isEnd && (
        <div
          style={{ width: '100%', height: '10px' }}
          className="flag"
          ref={containerRef}
        />
      )}
    </div>
  );
}

export default InfiniteScroll;
