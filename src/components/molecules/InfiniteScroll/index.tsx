import { Fragment, ReactNode, useRef } from 'react';

import useInfiniteScroll from '@/hook/useInfiniteScroll';

type InfiniteScrollProps<T> = {
  items: T[];
  components: (props: T) => ReactNode;
  className: string;
};

// NOTE - deprecated
function InfiniteScroll<T extends { id: string } & unknown>({
  items,
  components,
  className,
}: InfiniteScrollProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { elements, isEnd } = useInfiniteScroll<HTMLDivElement, T>(
    containerRef,
    items,
  );

  return (
    <div className={className}>
      {elements.map((element) => (
        <Fragment key={element.id}>{components(element)}</Fragment>
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
