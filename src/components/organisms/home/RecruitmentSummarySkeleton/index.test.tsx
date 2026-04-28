import { render, screen } from '@testing-library/react';

import RecruitmentSummary from './index';

vi.mock('@/components/atoms/Timer', () => ({
  default: () => <div data-testid="timer">timer</div>,
}));

vi.mock('@/components/organisms/home/SummaryCards', () => ({
  default: () => <div data-testid="summary-cards">summary cards</div>,
}));

describe('RecruitmentSummarySkeleton', () => {
  it('renders the start countdown message and timer in before status', () => {
    render(<RecruitmentSummary currentStatus="before" />);

    expect(screen.getByText('모집 시작까지')).toBeInTheDocument();
    expect(screen.getByTestId('timer')).toBeInTheDocument();
  });

  it('renders the end countdown message and timer in ongoing status', () => {
    render(<RecruitmentSummary currentStatus="ongoing" />);

    expect(screen.getByText('모집 마감까지')).toBeInTheDocument();
    expect(screen.getByTestId('timer')).toBeInTheDocument();
  });

  it('renders summary cards in after status', () => {
    render(<RecruitmentSummary currentStatus="after" />);

    expect(screen.getByTestId('summary-cards')).toBeInTheDocument();
    expect(screen.queryByTestId('timer')).not.toBeInTheDocument();
  });
});
