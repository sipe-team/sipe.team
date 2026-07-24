import { render, screen } from '@testing-library/react';

import Table from './index';

vi.mock('@/components/atoms/Badge', () => ({
  default: ({ text }: { text: string }) => <span>{text}</span>,
}));

vi.mock('@/components/molecules/GlowArea', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="glow-area">{children}</div>
  ),
}));

vi.mock('@/libs/assets/icons', () => ({
  CheckCircleIcon: () => <svg aria-label="지원 조건 충족" />,
}));

describe('Table', () => {
  it('renders recurring dates, descriptions, and badges for schedule rows', () => {
    render(
      <Table
        isApplicant={false}
        dataList={[
          {
            recurring_date: '매주 목요일',
            text: '정기 세션 참여',
            badge: '필수',
          },
          {
            recurring_date: '격주 토요일',
            text: '네트워킹 참여',
            highlight: true,
          },
        ]}
      />,
    );

    expect(screen.getByText('매주 목요일')).toBeInTheDocument();
    expect(screen.getByText('정기 세션 참여')).toBeInTheDocument();
    expect(screen.getByText('필수')).toBeInTheDocument();
    expect(screen.getByText('격주 토요일')).toBeInTheDocument();
    expect(screen.getByText('네트워킹 참여')).toBeInTheDocument();
    expect(screen.getByTestId('glow-area')).toHaveTextContent('네트워킹 참여');
  });

  it('renders applicant rows with check icons and without schedule metadata', () => {
    render(
      <Table
        isApplicant
        dataList={[
          {
            recurring_date: '표시되지 않는 날짜',
            text: '개발 경험이 있는 분',
            badge: '표시되지 않는 배지',
          },
        ]}
      />,
    );

    expect(screen.getByLabelText('지원 조건 충족')).toBeInTheDocument();
    expect(screen.getByText('개발 경험이 있는 분')).toBeInTheDocument();
    expect(screen.queryByText('표시되지 않는 날짜')).not.toBeInTheDocument();
    expect(screen.queryByText('표시되지 않는 배지')).not.toBeInTheDocument();
  });
});
