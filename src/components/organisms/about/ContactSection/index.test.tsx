import type { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';

import ContactSection from './index';

vi.mock('@/components/atoms/ContentWithTitle', () => ({
  default: ({ children, title }: { children: ReactNode; title: string }) => (
    <section data-testid="content-with-title">
      <h1>{title}</h1>
      {children}
    </section>
  ),
}));

vi.mock('@/libs/assets/icons', () => ({
  EmailIcon: () => <svg aria-label="email icon" />,
}));

describe('ContactSection', () => {
  it('renders the contact title and guidance message', () => {
    render(<ContactSection />);

    expect(screen.getByText('문의')).toBeInTheDocument();
    expect(
      screen.getByText(
        '더 궁금한 질문이 있거나 후원을 원하신다면 언제든 연락해 주세요!',
      ),
    ).toBeInTheDocument();
  });

  it('renders the email contact link with external link attributes', () => {
    render(<ContactSection />);

    const link = screen.getByRole('link', { name: /sipe.team@gmail.com/ });

    expect(link).toHaveAttribute('href', 'mailto:sipe.team@gmail.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByLabelText('email icon')).toBeInTheDocument();
  });
});
