import { sendGAEvent } from '@next/third-parties/google';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import RecruitmentStatusSection from './index';

const { copyToClipboard } = vi.hoisted(() => ({
  copyToClipboard: vi.fn().mockResolvedValue(undefined),
}));

vi.mock('next/dynamic', () => ({
  default: () =>
    function RecruitmentSummary({ currentStatus }: { currentStatus: string }) {
      return <div data-testid="recruitment-summary">{currentStatus}</div>;
    },
}));

vi.mock('@next/third-parties/google', () => ({
  sendGAEvent: vi.fn(),
}));

vi.mock('@/hook/useCopyToClipboard', () => ({
  default: () => ({ copyToClipboard }),
}));

vi.mock('@/libs/utils/recruit', () => ({
  displayApplication: {
    ongoing: {
      buttonText: '지원하기',
      formUrl: 'https://example.com/apply',
    },
  },
  getCurrentStatus: () => 'ongoing',
}));

describe('RecruitmentStatusSection', () => {
  beforeEach(() => {
    copyToClipboard.mockClear();
    vi.mocked(sendGAEvent).mockClear();
    vi.spyOn(window, 'open').mockImplementation(() => null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the current recruitment summary and actions', () => {
    render(<RecruitmentStatusSection />);

    expect(screen.getByTestId('recruitment-summary')).toHaveTextContent(
      'ongoing',
    );
    expect(
      screen.getByRole('button', { name: '지원하기' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '링크 공유하기' }),
    ).toBeInTheDocument();
  });

  it('keeps application and share button behavior', async () => {
    render(<RecruitmentStatusSection />);

    fireEvent.click(screen.getByRole('button', { name: '지원하기' }));

    expect(window.open).toHaveBeenCalledWith(
      'https://example.com/apply',
      '_blank',
      'noopener,noreferrer',
    );
    expect(sendGAEvent).toHaveBeenCalledWith(
      'event',
      'cilck_application_button',
      {
        screen_name: '/',
      },
    );

    fireEvent.click(screen.getByRole('button', { name: '링크 공유하기' }));

    await waitFor(() => {
      expect(copyToClipboard).toHaveBeenCalledWith('https://sipe.team');
    });
    expect(sendGAEvent).toHaveBeenCalledWith(
      'event',
      'cilck_share_link_button',
      {
        screen_name: '/',
      },
    );
  });
});
