import { Wrapper } from './styled';

export type HamburgerButtonProps = {
  onClick: () => void;
  isOpened?: boolean;
};

export default function HamburgerButton({
  onClick,
  isOpened = false,
}: HamburgerButtonProps) {
  return (
    <Wrapper onClick={onClick} isOpened={isOpened}>
      <span />
      <span />
      <span />
    </Wrapper>
  );
}
