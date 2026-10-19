import { fireEvent, render, screen } from '@testing-library/react';

import RecruitBarChart from './index';

vi.mock('@/hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => ({
    ref: vi.fn(),
    isVisible: true,
  }),
}));

vi.mock('@/hooks/useCountAnimation', () => ({
  useCountAnimation: ({ end }: { end: number }) => end,
}));

describe('RecruitBarChart', () => {
  it('renders the chart title and each bar item', () => {
    render(
      <RecruitBarChart
        title="지원 현황"
        data={[
          {
            name: 'Backend',
            value: 10,
            percentage: 50,
            examples: 'Java, Kotlin',
          },
          {
            name: 'Frontend',
            value: 10,
            percentage: 50,
            examples: 'React, Next.js',
          },
        ]}
      />,
    );

    expect(
      screen.getByRole('region', { name: '지원 현황 차트' }),
    ).toBeInTheDocument();
    expect(screen.getByText('지원 현황')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Backend: 10명, 50퍼센트'),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Frontend: 10명, 50퍼센트'),
    ).toBeInTheDocument();
    expect(screen.getAllByText('10명')).toHaveLength(2);
  });

  it('renders the tooltip when a bar item is hovered', () => {
    render(
      <RecruitBarChart
        title="지원 현황"
        data={[
          {
            name: 'Backend',
            value: 10,
            percentage: 50,
            examples: 'Java, Kotlin',
          },
        ]}
      />,
    );

    fireEvent.mouseEnter(screen.getByLabelText('Backend: 10명, 50퍼센트'));

    expect(screen.getByText('10명 (50%)')).toBeInTheDocument();
    expect(screen.getByText('Java, Kotlin')).toBeInTheDocument();
  });
});
