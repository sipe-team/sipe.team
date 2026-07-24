import { render, screen } from '@testing-library/react';

import Home from './index';

vi.mock('next/image', () => ({
  default: ({ alt, src }: { alt: string; src: string }) => (
    // Tests only need an element with image semantics.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />
  ),
}));

vi.mock('@/components/organisms/home/RecruitmentStatusSection', () => ({
  default: () => <section>모집 상태와 지원 버튼</section>,
}));

describe('Home', () => {
  it('renders the hero copy, background image, and recruitment content', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Sharing Insights with People Everyday/,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: '개발자들이 함께 교류하며 성장하는 IT 커뮤니티',
      }),
    ).toBeInTheDocument();
    expect(screen.getByAltText('배경 이미지')).toHaveAttribute(
      'src',
      '/assets/home-bg.png',
    );
    expect(screen.getByText('모집 상태와 지원 버튼')).toBeInTheDocument();
  });
});
