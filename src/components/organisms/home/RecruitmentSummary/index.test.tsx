import { render, screen } from '@testing-library/react';

import RecruitmentSummary from './index';

vi.mock('@/components/atoms/Timer', () => ({
  default: ({
    dates,
    hours,
    minutes,
    seconds,
    isRecruiting,
  }: {
    dates: number;
    hours: number;
    minutes: number;
    seconds: number;
    isRecruiting: boolean;
  }) => (
    <div data-testid="timer">
      {dates}:{hours}:{minutes}:{seconds}:{String(isRecruiting)}
    </div>
  ),
}));

vi.mock('@/components/organisms/home/SummaryCards', () => ({
  default: () => <div data-testid="summary-cards">summary cards</div>,
}));

vi.mock('@/hook/useTimer', () => ({
  default: () => ({
    dates: 1,
    hours: 2,
    minutes: 3,
    seconds: 4,
  }),
}));

describe('RecruitmentSummary', () => {
  it('renders the start countdown message and timer in before status', () => {
    render(<RecruitmentSummary currentStatus="before" />);

    expect(screen.getByText('모집 시작까지')).toBeInTheDocument();
    expect(screen.getByTestId('timer')).toHaveTextContent('1:2:3:4:true');
    expect(screen.queryByTestId('summary-cards')).not.toBeInTheDocument();
  });

  it('renders the end countdown message and timer in ongoing status', () => {
    render(<RecruitmentSummary currentStatus="ongoing" />);

    expect(screen.getByText('모집 마감까지')).toBeInTheDocument();
    expect(screen.getByTestId('timer')).toHaveTextContent('1:2:3:4:true');
    expect(screen.queryByTestId('summary-cards')).not.toBeInTheDocument();
  });

  it('renders summary cards in after status', () => {
    render(<RecruitmentSummary currentStatus="after" />);

    expect(screen.getByTestId('summary-cards')).toBeInTheDocument();
    expect(screen.queryByTestId('timer')).not.toBeInTheDocument();
  });
});
