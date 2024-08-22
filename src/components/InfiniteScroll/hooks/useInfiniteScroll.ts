import { RefObject, useEffect, useState } from 'react';

import { getIntersectionObserver } from '@/libs/observers/getIntersectionObserver';

const DEFAULT_OFFSET = 12;

const nextPage = (page: number, lastPage: number) => {
  if (page + 1 > lastPage) {
    return page;
  }
  return page + 1;
};

export const useInfiniteScroll = (
  target: RefObject<any>,
  items: Array<unknown>,
  options?: {
    offest: number;
  }
) => {
  const offset = options?.offest || DEFAULT_OFFSET;

  const [lastPage, setLastPage] = useState(items.length / offset);
  const pageInfo = {
    page: 0,
    lastPage: lastPage + 1,
  };

  useEffect(() => {
    setLastPage(items.length / offset);
    pageInfo.page = 0;
    pageInfo.lastPage = lastPage + 1;
  }, [items]);

  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState(0);
  const [elements, setElements] = useState<Array<unknown>>([]);

  const changeNextPage = () => {
    const next = nextPage(pageInfo.page, pageInfo.lastPage);
    pageInfo.page = next;
    setPage(next);
    if (pageInfo.page > lastPage) {
      setIsEnd(true);
    }
  };

  const [observer, setObserver] =
    useState<ReturnType<typeof getIntersectionObserver>>();

  useEffect(() => {
    if (target) {
      setObserver(getIntersectionObserver(target, changeNextPage));
    } else {
      if (observer) {
        observer.stop();
        observer.disconnect();
      }
    }
  }, [target]);

  useEffect(() => {
    setLoading(true);
    setElements(items.slice(0, offset * page));
    setLoading(false);
  }, [items, page]);

  useEffect(() => {
    if (observer) {
      observer?.start();
      return () => {
        observer?.stop();
        observer?.disconnect();
      };
    }
  }, [observer]);

  return { loading, isEnd, elements };
};
