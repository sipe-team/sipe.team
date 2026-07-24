import type { ReactNode } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Navigation from './index';

const { sendGAEvent } = vi.hoisted(() => ({
  sendGAEvent: vi.fn(),
}));

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/about',
}));

vi.mock('@next/third-parties/google', () => ({
  sendGAEvent,
}));

vi.mock('@/components/atoms/Layout', () => ({
  default: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={className}>{children}</div>,
}));

vi.mock('@/components/global/HamburgerButton', () => ({
  default: ({
    isOpened,
    onClick,
  }: {
    isOpened: boolean;
    onClick: () => void;
  }) => (
    <button aria-expanded={isOpened} aria-label="메뉴" onClick={onClick}>
      메뉴
    </button>
  ),
}));

vi.mock('@/components/molecules/Button', () => ({
  default: ({
    active,
    children,
    disabled,
    href,
    onClick,
  }: {
    active?: boolean;
    children: ReactNode;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
  }) => (
    <a
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled}
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick?.();
      }}
    >
      {children}
    </a>
  ),
}));

vi.mock('@/libs/assets/logos', () => ({
  SipeLogo: () => <svg aria-label="사이프 로고" />,
}));

vi.mock('@/libs/utils/recruit', () => ({
  displayApplication: {
    ongoing: {
      buttonText: '지원하기',
      formUrl: 'https://example.com/apply',
    },
  },
  getCurrentStatus: () => 'ongoing',
}));

describe('Navigation', () => {
  beforeEach(() => {
    sendGAEvent.mockClear();
  });

  it('renders the current menu, navigation links, and application link', () => {
    render(<Navigation />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('사이프 로고').closest('a')).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('link', { name: 'Recruit' })).toHaveAttribute(
      'href',
      '/recruit',
    );
    expect(screen.getByRole('link', { name: 'People' })).toHaveAttribute(
      'href',
      '/people',
    );
    expect(screen.getByRole('link', { name: 'Activity' })).toHaveAttribute(
      'href',
      '/activity',
    );
    expect(screen.getByRole('link', { name: 'Join Us' })).toHaveAttribute(
      'href',
      'https://example.com/apply',
    );
  });

  it('toggles the mobile menu and reports application clicks', () => {
    render(<Navigation />);

    const menuButton = screen.getByRole('button', { name: '메뉴' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(screen.getByRole('link', { name: 'Join Us' }));
    expect(sendGAEvent).toHaveBeenCalledWith('event', 'cilck_join_us_button', {
      screen_name: 'menu',
    });
  });
});
