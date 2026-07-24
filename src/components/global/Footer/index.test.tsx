import type { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';

import Footer from './index';

vi.mock('@/components/atoms/Layout', () => ({
  default: ({ children }: { children: ReactNode }) => (
    <div data-testid="layout">{children}</div>
  ),
}));

vi.mock('@/components/molecules/SocialIconLink', () => ({
  default: ({ type, url }: { type: string; url: string }) => (
    <a href={url}>{type}</a>
  ),
}));

describe('Footer', () => {
  it('renders the footer copyright and social links', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('All rights reserved ⓒ SIPE')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'INSTAGRAM' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/sipe_team',
    );
    expect(screen.getByRole('link', { name: 'GITHUB' })).toHaveAttribute(
      'href',
      'https://github.com/sipe-team',
    );
    expect(screen.getByRole('link', { name: 'YOUTUBE' })).toHaveAttribute(
      'href',
      'https://www.youtube.com/@sipe_team',
    );
    expect(screen.getByRole('link', { name: 'LINKEDIN' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/company/sipe.team',
    );
  });
});
