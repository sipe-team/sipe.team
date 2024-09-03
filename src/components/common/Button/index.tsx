import clsx from 'clsx';
import { Route } from 'next';
import Link, { LinkProps } from 'next/link';
import React, { ComponentProps, ReactNode } from 'react';

import styles from './index.module.scss';

type ButtonType = 'home' | 'menu' | 'apply' | 'chip';
type ButtonColor = 'black' | 'primary' | 'white';

type CommonProps = {
  active?: boolean;
  buttonType?: ButtonType;
  buttonColor?: ButtonColor;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink<T extends Route, K extends boolean | undefined> = {
  href: K extends true ? string : T;
  isExternalLink?: K;
} & Omit<LinkProps<T>, 'href'> &
  CommonProps;

type ButtonAsButton = ComponentProps<'button'> & CommonProps;

type ButtonProps<
  T extends Route | undefined = undefined,
  K extends boolean | undefined = undefined
> = T extends Route ? ButtonAsLink<T, K> : ButtonAsButton & { href?: never };

function Button<
  T extends Route | undefined = undefined,
  K extends boolean | undefined = undefined
>({
  href,
  active,
  buttonType = 'home',
  buttonColor = 'black',
  disabled,
  className,
  ...rest
}: ButtonProps<T, K>) {
  const commonClassName = clsx(
    styles.button,
    styles[buttonType],
    styles[buttonColor],
    {
      [styles.active]: active,
      [styles.disabled]: disabled,
    },
    className
  );

  if (href) {
    const { isExternalLink, ...linkRest } = rest as Omit<
      ButtonAsLink<Route, K>,
      'href'
    >;

    return (
      <Link
        href={href as Route}
        className={commonClassName}
        aria-disabled={disabled}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
        target={isExternalLink ? '_blank' : undefined}
        {...linkRest}
      />
    );
  }

  return (
    <button
      className={commonClassName}
      disabled={disabled}
      aria-disabled={disabled}
      {...(rest as ComponentProps<'button'>)}
    />
  );
}

export default Button;
