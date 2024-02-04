import React from 'react';

import useDeviceType from '@/hook/useDeviceType';

import * as S from './styled';

type ButtonProps = React.ComponentProps<'button'> & {
  selected?: boolean;
  buttonType: 'home' | 'menu' | 'apply' | 'chip';
  buttonColor?: 'black' | 'green';
};

export default function Button({
  children,
  disabled,
  selected = false,
  buttonType,
  buttonColor = 'black',
  onClick,
  ...props
}: ButtonProps) {
  const { isMobile, isDesktop } = useDeviceType();

  switch (buttonType) {
    case 'home':
      return (
        <S.HomeButton
          disabled={disabled}
          color={buttonColor}
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
        <S.ChipButton onClick={onClick} selected={selected} {...props}>
          {children}
        </S.ChipButton>
      );
    default:
      return null;
  }
}
