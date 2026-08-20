import type { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';

import Faq from './index';

vi.mock('@/components/atoms/ContentWithTitle', () => ({
  default: ({ children, title }: { children: ReactNode; title: string }) => (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  ),
}));

vi.mock('@/components/molecules/accordion', () => ({
  Accordion: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  AccordionItem: ({ title, value }: { title: string; value: string }) => (
    <article>
      <h2>{title}</h2>
      <p>{value}</p>
    </article>
  ),
}));

describe('Faq', () => {
  it('renders every question and answer', () => {
    render(
      <Faq
        faqs={[
          {
            key: 'schedule',
            question: '정기 모임은 언제인가요?',
            answer: '매주 목요일에 진행합니다.',
          },
          {
            key: 'location',
            question: '모임 장소는 어디인가요?',
            answer: '서울에서 오프라인으로 진행합니다.',
          },
        ]}
      />,
    );

    expect(screen.getByText('자주 묻는 질문')).toBeInTheDocument();
    expect(screen.getByText('정기 모임은 언제인가요?')).toBeInTheDocument();
    expect(screen.getByText('매주 목요일에 진행합니다.')).toBeInTheDocument();
    expect(screen.getByText('모임 장소는 어디인가요?')).toBeInTheDocument();
    expect(
      screen.getByText('서울에서 오프라인으로 진행합니다.'),
    ).toBeInTheDocument();
  });
});
