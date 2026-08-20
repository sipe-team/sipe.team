import type { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';

import Recruit from './index';

vi.mock('@sipe-team/side', () => ({
  Flex: ({ children, justify }: { children: ReactNode; justify?: string }) => (
    <div data-justify={justify}>{children}</div>
  ),
}));

vi.mock('@/components/atoms/Layout', () => ({
  default: ({ children }: { children: ReactNode }) => (
    <div data-testid="layout">{children}</div>
  ),
}));

vi.mock('@/components/atoms/ContentWithTitle', () => ({
  default: ({ children, title }: { children: ReactNode; title: string }) => (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  ),
}));

vi.mock('@/components/atoms/DraggableContainer', () => ({
  default: ({
    ariaLabel,
    children,
  }: {
    ariaLabel?: string;
    children: ReactNode;
  }) => (
    <div aria-label={ariaLabel} role="region">
      {children}
    </div>
  ),
}));

vi.mock('@/components/molecules/Table', () => ({
  default: ({ isApplicant }: { isApplicant: boolean }) => (
    <div data-testid={isApplicant ? 'applicant-table' : 'activity-table'} />
  ),
}));

vi.mock('@/components/organisms/Faq', () => ({
  default: () => <section data-testid="faq" />,
}));

vi.mock('@/components/organisms/recruit/CompanyChart', () => ({
  default: () => <article data-testid="company-chart" />,
}));

vi.mock('@/components/organisms/recruit/ExperienceChart', () => ({
  default: () => <article data-testid="experience-chart" />,
}));

vi.mock('@/components/organisms/recruit/JobRoleChart', () => ({
  default: () => <article data-testid="job-role-chart" />,
}));

vi.mock('@/components/organisms/recruit/ScheduleCard', () => ({
  default: ({ title }: { title: string }) => (
    <article data-testid="schedule-card">{title}</article>
  ),
}));

vi.mock('@/db', () => ({
  getFaq: () => ({
    recruit: [{ id: 'faq-1', question: '질문', answer: '답변' }],
  }),
}));

describe('Recruit page', () => {
  it('renders the recruit sections, schedule cards, and member charts', () => {
    render(<Recruit />);

    expect(screen.getByText('지원자격')).toBeInTheDocument();
    expect(screen.getByText('모집 일정')).toBeInTheDocument();
    expect(screen.getByText('활동안내')).toBeInTheDocument();
    expect(screen.getByText('이전 기수 구성원 현황')).toBeInTheDocument();
    expect(screen.getAllByTestId('schedule-card')).toHaveLength(5);
    expect(
      screen.getAllByTestId('schedule-card')[0].parentElement,
    ).toHaveAttribute('data-justify', 'normal');
    expect(screen.getByTestId('experience-chart')).toBeInTheDocument();
    expect(screen.getByTestId('company-chart')).toBeInTheDocument();
    expect(screen.getByTestId('job-role-chart')).toBeInTheDocument();
  });
});
