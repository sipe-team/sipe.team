import { render, screen } from '@testing-library/react';

import Badge from './index';

describe('Badge', () => {
  it('renders the provided text', () => {
    render(<Badge text="후원사" />);

    expect(screen.getByText('후원사')).toBeInTheDocument();
  });
});
