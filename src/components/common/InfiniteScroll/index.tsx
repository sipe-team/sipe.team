type InfiniteScrollProps = React.ComponentProps<'div'> & {};

const InfiniteScroll = ({ children }: InfiniteScrollProps) => {
  return <div>{children}</div>;
};

export default InfiniteScroll;
