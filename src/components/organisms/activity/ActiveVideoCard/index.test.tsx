import { render, screen } from '@testing-library/react';

import ActiveVideoCard from './index';

vi.mock('@/components/molecules/Image', () => ({
  default: ({ alt, src }: { alt: string; src?: string }) => (
    // Tests only need an element with alt text semantics.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />
  ),
}));

describe('ActiveVideoCard', () => {
  it('renders the video thumbnail, metadata, and outbound link', () => {
    render(
      <ActiveVideoCard
        thumbnail="/activity-video.png"
        contentTitle="사이프 세션 발표"
        userName="김사이퍼"
        createDate="2026.06.21"
        link="https://youtube.com/watch?v=sipe"
      />,
    );

    expect(screen.getByAltText('사이프 세션 발표')).toHaveAttribute(
      'src',
      '/activity-video.png',
    );
    expect(screen.getByText('사이프 세션 발표')).toBeInTheDocument();
    expect(screen.getByText('김사이퍼')).toBeInTheDocument();
    expect(screen.getByText('2026.06.21')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '보러가기' })).toHaveAttribute(
      'href',
      'https://youtube.com/watch?v=sipe',
    );
  });
});
