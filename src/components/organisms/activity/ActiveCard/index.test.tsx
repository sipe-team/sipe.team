import { render, screen } from '@testing-library/react';

import ActiveCard from './index';

vi.mock('@/components/molecules/Image', () => ({
  default: ({ alt, src }: { alt: string; src?: string }) => (
    // Tests only need an element with alt text semantics.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />
  ),
}));

vi.mock('@/libs/assets/icons', () => ({
  UserIcon: ({ className }: { className?: string }) => (
    <svg aria-label="default user profile" className={className} />
  ),
}));

describe('ActiveCard', () => {
  it('renders the post thumbnail, content, profile, metadata, and outbound link', () => {
    render(
      <ActiveCard
        thumbnail="/activity-post.png"
        profile="/profile.png"
        contentTitle="사이프 블로그 글"
        contentBody="사이프 활동을 정리한 글입니다"
        userName="김사이퍼"
        createDate="2026.06.22"
        link="https://example.com/post"
      />,
    );

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com/post',
    );
    expect(screen.getByAltText('thumbnail')).toHaveAttribute(
      'src',
      '/activity-post.png',
    );
    expect(screen.getByAltText('user profile')).toHaveAttribute(
      'src',
      '/profile.png',
    );
    expect(screen.getByText('사이프 블로그 글')).toBeInTheDocument();
    expect(
      screen.getByText('사이프 활동을 정리한 글입니다'),
    ).toBeInTheDocument();
    expect(screen.getByText('김사이퍼')).toBeInTheDocument();
    expect(screen.getByText('2026.06.22')).toBeInTheDocument();
  });

  it('renders the default user icon when profile is omitted', () => {
    render(
      <ActiveCard
        thumbnail="/activity-post.png"
        contentTitle="프로필 없는 글"
        contentBody="기본 아이콘 확인"
        userName="박사이퍼"
        createDate="2026.06.23"
        link="https://example.com/no-profile"
      />,
    );

    expect(screen.getByLabelText('default user profile')).toBeInTheDocument();
    expect(screen.queryByAltText('user profile')).not.toBeInTheDocument();
  });
});
