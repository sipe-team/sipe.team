import type { ReactNode } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import ActivitiesSection from './index';

vi.mock('swiper/modules', () => ({
  Autoplay: {},
  EffectCoverflow: {},
  Pagination: {},
}));

vi.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: ReactNode }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }: { children: ({ isActive }: { isActive: boolean }) => ReactNode }) => (
    <div data-testid="swiper-slide">{children({ isActive: true })}</div>
  ),
}));

vi.mock('@/components/atoms/ContentWithTitle', () => ({
  default: ({ children, title }: { children: ReactNode; title: string }) => (
    <section data-testid="content-with-title">
      <h1>{title}</h1>
      {children}
    </section>
  ),
}));

vi.mock('@/components/molecules/Button', () => ({
  default: ({
    children,
    onClick,
    active,
  }: {
    children: ReactNode;
    onClick?: () => void;
    active?: boolean;
  }) => (
    <button aria-pressed={active} onClick={onClick}>
      {children}
    </button>
  ),
}));

vi.mock('@/components/molecules/Image', () => ({
  default: ({ alt, src }: { alt: string; src: string }) => <img alt={alt} src={src} />,
}));

vi.mock('@/db', () => ({
  getAbout: () => ({
    activity: {
      session: {
        key: 'session',
        name: '세션',
        title: '세션 활동',
        description: '세션 설명',
        activities: ['/session-1.png', '/session-2.png'],
      },
      networking: {
        key: 'networking',
        name: '네트워킹',
        title: '네트워킹 활동',
        description: '네트워킹 설명',
        activities: ['/networking-1.png'],
      },
    },
  }),
}));

describe('ActivitiesSection', () => {
  it('renders the initially selected activity menu and description', () => {
    render(<ActivitiesSection />);

    expect(screen.getByText('주요 활동')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '세션' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '네트워킹' })).toBeInTheDocument();
    expect(screen.getByText('세션 활동')).toBeInTheDocument();
    expect(screen.getByText('세션 설명')).toBeInTheDocument();
    expect(screen.getAllByAltText('activity')).toHaveLength(2);
  });

  it('updates the description when another activity menu is selected', () => {
    render(<ActivitiesSection />);

    fireEvent.click(screen.getByRole('button', { name: '네트워킹' }));

    expect(screen.getByText('네트워킹 활동')).toBeInTheDocument();
    expect(screen.getByText('네트워킹 설명')).toBeInTheDocument();
    expect(screen.getAllByAltText('activity')).toHaveLength(1);
  });
});
