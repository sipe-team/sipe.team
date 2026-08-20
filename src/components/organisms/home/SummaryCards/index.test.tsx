import { render, screen } from '@testing-library/react';

import SummaryCards from './index';

describe('SummaryCards', () => {
  it('renders all summary labels and values', () => {
    render(<SummaryCards />);

    expect(screen.getByText('누적 지원자 수')).toBeInTheDocument();
    expect(screen.getByText('400+')).toBeInTheDocument();
    expect(screen.getByText('총 참여자 수')).toBeInTheDocument();
    expect(screen.getByText('140')).toBeInTheDocument();
    expect(screen.getByText('누적 미션 수')).toBeInTheDocument();
    expect(screen.getByText('51')).toBeInTheDocument();
  });
});
