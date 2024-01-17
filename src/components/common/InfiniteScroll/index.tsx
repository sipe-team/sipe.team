import { useRef } from 'react';
import * as S from './styled';

type InfiniteScrollProps = React.ComponentProps<'div'> & {
  isEnd: boolean;
};

const InfiniteScroll = ({ children, isEnd }: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return <S.Wrapper ref={containerRef}>{children}</S.Wrapper>;
};

export default InfiniteScroll;
