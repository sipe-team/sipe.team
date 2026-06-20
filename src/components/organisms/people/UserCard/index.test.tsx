import { render, screen } from '@testing-library/react';

import UserCard from './index';

vi.mock('@/components/molecules/Image', () => ({
  default: ({ alt, src }: { alt: string; src?: string }) => (
    // Tests only need an element with alt text semantics.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />
  ),
}));

vi.mock('@/components/molecules/SocialIconLink', () => ({
  default: ({
    type,
    url,
  }: {
    type: string;
    url?: string;
    size?: 'small' | 'middle';
  }) => (
    <a href={url} aria-label={type} data-testid="social-icon-link">
      {type}
    </a>
  ),
}));

vi.mock('@/libs/assets/icons', () => ({
  OrganizerIcon: ({ 'aria-label': ariaLabel }: { 'aria-label'?: string }) => (
    <svg aria-label={ariaLabel ?? 'organizer'} />
  ),
}));

describe('UserCard', () => {
  it('renders profile, user information, social links, and review', () => {
    render(
      <UserCard
        period="5"
        img="/profile.png"
        name="김사이퍼"
        part="Frontend"
        links={[
          ['GITHUB', 'https://github.com/sipe-team'],
          ['LINKEDIN', 'https://linkedin.com/company/sipe.team'],
        ]}
        introduce="함께 성장하고 있습니다"
        review="미션과 활동이 좋았습니다"
        isOrganizer
      />,
    );

    expect(screen.getByAltText('user image')).toHaveAttribute(
      'src',
      '/profile.png',
    );
    expect(
      screen.getByRole('heading', { level: 3, name: '김사이퍼' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('함께 성장하고 있습니다')).toBeInTheDocument();
    expect(screen.getByText('Organizer')).toBeInTheDocument();
    expect(screen.getAllByTestId('social-icon-link')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'GITHUB' })).toHaveAttribute(
      'href',
      'https://github.com/sipe-team',
    );
    expect(screen.getByRole('link', { name: 'LINKEDIN' })).toHaveAttribute(
      'href',
      'https://linkedin.com/company/sipe.team',
    );
    expect(
      screen.getByRole('heading', { level: 3, name: '활동후기' }),
    ).toBeInTheDocument();
    expect(screen.getByText('미션과 활동이 좋았습니다')).toBeInTheDocument();
  });

  it('omits optional organizer and review content when not provided', () => {
    render(
      <UserCard
        period="5"
        name="박사이퍼"
        part="Backend"
        introduce="백엔드 미션 참여"
        links={[]}
      />,
    );

    expect(screen.getByText('박사이퍼')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('백엔드 미션 참여')).toBeInTheDocument();
    expect(screen.queryByText('Organizer')).not.toBeInTheDocument();
    expect(screen.queryByText('활동후기')).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('social-icon-link')).toHaveLength(0);
  });
});
