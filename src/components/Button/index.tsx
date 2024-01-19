import useDeviceType from '@/hook/useDeviceType';
import * as S from './styled';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  type: 'home' | 'menu' | 'apply' | 'chip';
  color?: 'green' | 'black';
  onClick?: () => void;
};

export default function Button({
  children,
  disabled,
  selected = false,
  type,
  color = 'black',
  onClick,
}: ButtonProps) {
  const { isMobile, isDesktop } = useDeviceType();

  switch (type) {
    case 'home':
      return (
        <S.HomeButton
          disabled={disabled}
          color={color}
          onClick={onClick}
          isMobile={isMobile}
        >
          {children}
        </S.HomeButton>
      );
    case 'menu':
      return (
        <S.MenuButton
          onClick={onClick}
          selected={selected}
          isDesktop={isDesktop}
        >
          {children}
        </S.MenuButton>
      );
    case 'apply':
      return (
        <S.ApplyButton onClick={onClick} isDesktop={isDesktop}>
          {children}
        </S.ApplyButton>
      );
    case 'chip':
      return (
        <S.ChipButton onClick={onClick} selected={selected}>
          {children}
        </S.ChipButton>
      );
    default:
      return null;
  }
}
