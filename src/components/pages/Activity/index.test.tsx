import type { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';

import type { ActivityPost, ActivityVideo } from '@/db/model';

import Activity from './index';

vi.mock('@/components/atoms/Layout', () => ({
  default: ({ children }: { children: ReactNode }) => <div data-testid="layout">{children}</div>,
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
  default: ({ children, active }: { children: ReactNode; active?: boolean }) => (
    <button aria-pressed={active}>{children}</button>
  ),
}));

vi.mock('@/components/organisms/activity/ActiveCard', () => ({
  default: ({ contentTitle }: { contentTitle: string }) => <article data-testid="active-card">{contentTitle}</article>,
}));

vi.mock('@/components/organisms/activity/ActiveVideoCard', () => ({
  default: ({ contentTitle }: { contentTitle: string }) => <article data-testid="active-video-card">{contentTitle}</article>,
}));

const postActivities: ActivityPost[] = [
  {
    id: 'post-1',
    type: 'B',
    thumbnail: '/post.png',
    title: '블로그 글',
    description: '블로그 설명',
    name: '작성자',
    date: '2025-01-01',
    link: 'https://example.com/post',
    profile: '/profile.png',
  },
];

const videoActivities: ActivityVideo[] = [
  {
    id: 'video-1',
    type: 'V',
    thumbnail: '/video.png',
    title: '발표 영상',
    description: '영상 설명',
    name: '발표자',
    date: '2025-01-02',
    link: 'https://example.com/video',
    profile: '/profile.png',
  },
];

describe('Activity page', () => {
  it('renders blog cards in the post tab', () => {
    render(<Activity activityData={postActivities} currentTab="post" />);

    expect(screen.getByRole('button', { name: '발표 영상' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '블로그' })).toBeInTheDocument();
    expect(screen.getAllByTestId('active-card')).toHaveLength(1);
    expect(screen.queryByTestId('active-video-card')).not.toBeInTheDocument();
    expect(screen.getByText('블로그 글')).toBeInTheDocument();
  });

  it('renders video cards in the video tab', () => {
    render(<Activity activityData={videoActivities} currentTab="video" />);

    expect(screen.getAllByTestId('active-video-card')).toHaveLength(1);
    expect(screen.queryByTestId('active-card')).not.toBeInTheDocument();
    expect(screen.getByTestId('active-video-card')).toHaveTextContent('발표 영상');
  });
});
