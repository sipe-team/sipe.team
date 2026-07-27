import { render, screen } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
  it('renders a native button with disabled state', () => {
    render(
      <Button buttonType="apply" disabled>
        지원하기
      </Button>,
    );

    const button = screen.getByRole('button', { name: '지원하기' });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders an external link with safe link attributes', () => {
    render(
      <Button
        buttonType="apply"
        href="https://example.com/apply"
        isExternalLink
      >
        지원하기
      </Button>,
    );

    const link = screen.getByRole('link', { name: '지원하기' });

    expect(link).toHaveAttribute('href', 'https://example.com/apply');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
