import { fireEvent, render, screen } from '@testing-library/react';

import SponsorImage from './SponsorImage';

vi.mock('next/image', () => ({
  default: ({
    alt,
    onError,
    src,
  }: {
    alt: string;
    onError?: () => void;
    src: string;
  }) => (
    // Tests only need an element with alt text semantics.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} onError={onError} src={src} />
  ),
}));

describe('SponsorImage', () => {
  it('renders the sponsor image with the provided alt text', () => {
    render(<SponsorImage src="/sponsor.png" alt="후원사" />);

    expect(screen.getByAltText('후원사')).toHaveAttribute(
      'src',
      '/sponsor.png',
    );
  });

  it('renders the fallback image when the sponsor image fails to load', () => {
    render(<SponsorImage src="/broken.png" alt="후원사" />);

    fireEvent.error(screen.getByAltText('후원사'));

    expect(screen.getByAltText('Image not available')).toHaveAttribute(
      'src',
      '/assets/empty_image.png',
    );
  });
});
